import React, { FC } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

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
  },
  limit: number
}

const RichText: FC<Props> = ({ payload, assets, limit }) => {
  const content = limit ? payload.content?.slice(0, limit) : payload.content;
  return (
    <>
    {content?.map((payload) => {
      
      //

      if (payload.nodeType === 'embedded-asset-block') {
        const asset = assets.find(item => item.sys.id === payload.data.target.sys.id)
        return (
          <div className='flex justify-center items-center m-6'>
            <img className='max-h-96 max-w-[100%]' src={asset?.fields?.file?.url} />
          </div>
        )
      }

      //

      if (payload.nodeType === 'unordered-list' || payload.nodeType === 'ordered-list') {
        const listItems = payload.content?.map(innerList => { 
          if (innerList.nodeType === 'list-item') {
            return innerList.content.map(item => <li>{item?.content?.[0]?.value}</li>)
          }
        })

        return <ul className='list-disc space-y-1 list-inside mb-2'>{listItems}</ul>
      }

      //

      const items = payload.content?.map(inner => { 
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

        return <div>{inner.value}</div>;
      })

      return (
        <p className='mb-2'>{items}</p>
      )
    })}
    </>
  )
}

export default RichText;
