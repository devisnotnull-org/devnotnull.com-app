import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
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

const renderUnorderedList = () => {

}

const renderCommonContentType = (
  assets: any[],
  content: ICommonDataNode[]
): (JSX.Element[] | undefined)[] => {

  return content?.map((payload, index) => {

    // if(index> 15) return <></>;

    if (payload.nodeType === 'embedded-asset-block') {
      const asset = assets.find(item => item.sys.id === payload.data.target.sys.id)
      return (
        <div className={blogStyles.ImageContainer}>
          <img className={blogStyles?.['ImageContainer--Image']} src={asset?.fields?.file?.url} />
        </div>
      )
    }

    // unordered-list
    console.log(payload.nodeType)

    if (payload.nodeType === 'list-item') {
      console.log(payload)
    }

    return payload.content?.map(inner => { 

      if (inner.nodeType === 'list-item') {
        console.log("@@@@@@@@@@@@@@")
        console.log(inner.content)
        return (<ul>{inner.content.map(item => <li>{item?.content?.[0]?.value}</li>)}</ul>)
      }
        
      if (getType(inner.marks) === 'code') {
        return (
          <SyntaxHighlighter language="javascript" >
            {inner.value}
          </SyntaxHighlighter>
        );
      }

      if (getType(inner.marks) === 'bold') {
        return (
          <p>
            <b>{inner.value}</b>
          </p>
        );
        }
    

      return <p>{inner.value}</p>;
    })
  }
  );
};



export const BlogView: FC<IBlogComponentProps> = () => {
  const blogItems = useSelector(getBlogItems);
  const linkedAssetItems = useSelector(getLinkedAsset) ?? [];
  
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
