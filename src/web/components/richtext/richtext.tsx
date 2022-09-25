import React, { FC } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import blogItemStyles from './richtext.css';

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
  payload: {
    content: any[]
  }
}

const RichText: FC<Props> = ({ payload, assets }) => (
  <>
  {payload.content?.map((payload) => {
    
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
        return (<ul style={{ padding: '0px', margin: '0 0 0 2rem' }}>{inner.content.map(item => <li style={{ padding: '0px', margin: '0px' }}><div>{item?.content?.[0]?.value}</div></li>)}</ul>)
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

      return <p>{inner.value}</p>;
    })

    return (
      <p>{items}</p>
    )

  })}
  </>
);

export default RichText;
