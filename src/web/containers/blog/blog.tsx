import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
  useParams
} from "react-router-dom";
import { ICommonDataNode } from 'models/common';
import { getBlogItems, getLinkedAsset } from '../../../core/blog/selectors';
import { IBlogComponentProps } from './blog.state';
import blogStyles from './blog.css';

export type IProps = {
  to: string;
};

export interface IAsset {
  data: {
    target: {
      sys: {
        id: string
        linkType: string
        type: string
      }
    }
  }
}

const getType = (marks: { type: string }[] | undefined): string => {
  if (!marks) return 'text';
  if (marks.find(item => item.type === 'bold')) return 'bold';
  if (marks.find(item => item.type === 'code')) return 'code';
  return 'text';
};

const renderCommonContentType = (
  assets: any[],
  content: ICommonDataNode[]
): (JSX.Element | undefined)[] => {

  return content?.map((payload, index) => {

    if (payload.nodeType === 'embedded-asset-block') {
      const asset = assets.find(item => item.sys.id === payload.data.target.sys.id)
      return (
        <div className={blogStyles.ImageContainer}>
          <img className={blogStyles?.['ImageContainer--Image']} src={asset?.fields?.file?.url} />
        </div>
      )
    }

    if (payload.nodeType === 'list-item') {
      console.log(payload)
    }

    const items = payload.content?.map(inner => { 

      if (inner.nodeType === 'list-item') {
        return (<ul>{inner.content.map(item => <li><p>{item?.content?.[0]?.value}</p></li>)}</ul>)
      }
        
      if (getType(inner.marks) === 'code') {
        return (
          <SyntaxHighlighter language="javascript" >
            {inner.value}
          </SyntaxHighlighter>
        );
      }

      if (getType(inner.marks) === 'bold') {
        return (<b>{inner.value}</b>);
      }

      return <span>{inner.value}</span>;
    })

    return <p>{items}</p>

  }
  );
};



export const BlogView: FC<IBlogComponentProps> = () => {
  const blogItems = useSelector(getBlogItems);
  const linkedAssetItems = useSelector(getLinkedAsset) ?? [];

  const params = useParams<{ page?: string }>()

  console.log("___________________")
  console.log("___________________")
  console.log("Page ", params)
  
  return (
    <div className={blogStyles.InnerContainer}>
      {blogItems.map(item => {
        return (
          <div className={blogStyles['Entry--Container']}>
            <h1 className={blogStyles['Entry--Header']}>
              {item?.fields?.title ?? ''}
            </h1>
            <div>
              {item?.fields?.blogContent?.content &&
                renderCommonContentType(linkedAssetItems, item?.fields?.blogContent?.content)}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BlogView;
