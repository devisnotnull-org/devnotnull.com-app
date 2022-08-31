import React, { FC } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import { ICommonDataNode } from 'models/common';

import blogItemStyles from './blogItem.css';

/**
 * 
 * @param marks 
 * @returns 
 */
const getType = (marks: { type: string }[] | undefined): string => {
  if (!marks) return 'text';
  if (marks.find(item => item.type === 'bold')) return 'bold';
  if (marks.find(item => item.type === 'code')) return 'code';
  return 'text';
};

type Props = {
  assets: any[]
  content: {
    slug: string
    title: string
    blogContent: {
      content: ICommonDataNode[]
    }
  }
}

/**
 * 
 * @param param0 
 * @returns 
 */
const BlogItemm: FC<Props> = ({ content, assets }) => {
  return (
    <>
    {content.blogContent.content?.map((payload) => {
      
      if (payload.nodeType === 'embedded-asset-block') {
        const asset = assets.find(item => item.sys.id === payload.data.target.sys.id)
        return (
          <div className={blogItemStyles.ImageContainer}>
            <img className={blogItemStyles?.['ImageContainer--Image']} src={asset?.fields?.file?.url} />
          </div>
        )
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

    })}
    <a href={`/blog/${content.slug}`}><b>Click to view full article</b></a>
    </>
  )
  }

export default BlogItemm;
