import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import classnames from 'classnames';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import { getBlogItems, getLinkedAsset } from '../../../core/blog/selectors';

import { IBlogComponentProps } from './blog.state';

import blogStyles from './blog.css';
import { ICommonDataNode } from 'models/common';

export type IProps = {
  to: string;
};

const getType = (marks: { type: string }[] | undefined): string => {
  if (!marks) return 'text';
  if (marks.find(item => item.type === 'bold')) return 'bold';
  if (marks.find(item => item.type === 'code')) return 'code';
  return 'text';
};

const renderCommonContentType = (
  assets: any[],
  content: ICommonDataNode[]
): (JSX.Element[] | undefined)[] => {
  return content?.map(payload =>
    payload.content?.map(inner => {

      if (inner.nodeType === 'list-item')
        return (<ul>{inner.content.map(item => <li>{item.content[0].value}</li>)}</ul>)
        
      if (getType(inner.marks) === 'code')
        return (
          <SyntaxHighlighter language="javascript" >
            {inner.value}
          </SyntaxHighlighter>
        );

      if (getType(inner.marks) === 'bold')
        return (
          <p>
            <b>{inner.value}</b>
          </p>
        );

      if (inner.nodeType === 'embedded-asset-block') {
        console.log("££££££££££")
        console.log("assets")
        console.log(assets)
        const asset = assets.find(item => item.sys.id === inner.data.target.sys.id)
        console.log("!!!!!!!!!!!")
        console.log("asset")
        console.log(asset)
        console.log("inner.data.")
        console.log(inner.data)
        return (
          <img src={asset?.fields?.file?.url} />
        )
      }

      return <p>{inner.value}</p>;
    })
  );
};

const renderAsset = (assets: any) => {
  return (<div>s</div>)
}

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
