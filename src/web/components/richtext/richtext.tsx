import React, { FC } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import Link from '../link/link';

type Props = {
  assets: any[]
  payload: {
    content: any[]
  },
  limit: number
}

const getType = (marks: { type: string }[] | undefined): string => {
  if (!marks) return 'text';
  if (marks.find(item => item.type === 'bold')) return 'bold';
  if (marks.find(item => item.type === 'code')) return 'code';
  return 'text';
};

const generateContentItems = (contentPayload: any) => {
  if (getType(contentPayload.marks) === 'code') {
    return (
      <SyntaxHighlighter language="javascript" >
        {contentPayload.value}
      </SyntaxHighlighter>
    );
  }

  if (getType(contentPayload.marks) === 'bold') {
    return (<b>{contentPayload.value}</b>);
  }

  if (getType(contentPayload.marks) === 'italic') {
    return (<i>{contentPayload.value}</i>);
  }

  if (getType(contentPayload.marks) === 'text') {
    return (<span>{contentPayload.value}</span>);
  }
}

const RichText: FC<Props> = ({ payload, assets, limit }) => {
  const content = limit ? payload.content?.slice(0, limit) : payload.content;
  return (
    <>
    {content?.map((payload) => {
      if (payload.nodeType === 'embedded-asset-block') {
        const asset = assets.find(item => item.sys.id === payload.data.target.sys.id)
        return (
          <div className='flex justify-center items-center m-6'>
            <img className='max-h-96 max-w-[100%]' src={asset?.fields?.file?.url} />
          </div>
        )
      }

      if (payload.nodeType === 'unordered-list' || payload.nodeType === 'ordered-list') {
        const listItems = payload.content?.map(innerList => { 
          if (innerList.nodeType === 'list-item') {
            return innerList.content.map(item => <li>{item?.content?.[0]?.value}</li>)
          }
        })

        return <ul className='list-disc space-y-1 list-inside mb-2'>{listItems}</ul>
      }

      if (payload.nodeType === 'paragraph') {
        const listItems = payload.content?.map(innerList => { 
          if (innerList.nodeType === 'bold') {
            return innerList.content.map(item => <span></span>)
          }
          if (innerList.nodeType === 'hyperlink') {
            return <Link to={innerList?.data?.uri} classNames='text-orange-500 font-bold'>{innerList.content?.[0]?.value}</Link>
          }
          return <span>{generateContentItems(innerList)}</span>
        })
        return <p className='mb-2'>{listItems}</p>
      }

      if (payload.nodeType === 'heading-1') {
        return <h1 className='mb-2 text-xl font-bold'>{payload?.content?.[0]?.value}</h1>
      }

      if (payload.nodeType === 'heading-2') {
        return <h2 className='mb-2 text-lg font-bold'>{payload?.content?.[0]?.value}</h2>
      }

      if (payload.nodeType === 'heading-3 text-lg font-bold') {
        return <h3 className='mb-2 font-bold'>{payload?.content?.[0]?.value}</h3>
      }
    })}
    </>
  )
}

export default RichText;
