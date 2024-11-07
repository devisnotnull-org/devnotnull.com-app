import React from 'react';
import Link from '../link/link';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { CommonDataNodeType } from '../../models/common/data-node';
import { AssetSchemaType } from '../../models/common/asset';

type Props = {
  assets: AssetSchemaType[];
  payload: CommonDataNodeType;
  limit?: number;
};

const getType = (marks: { type: string }[] | undefined): string => {
  if (!marks) return 'text';
  if (marks.find((item) => item.type === 'bold')) return 'bold';
  if (marks.find((item) => item.type === 'code')) return 'code';
  return 'text';
};

const generateContentItems = (contentPayload: any, key: number) => {
  if (getType(contentPayload.marks) === 'code') {
    return (
      <SyntaxHighlighter language="javascript" key={key}>
        {contentPayload.value}
      </SyntaxHighlighter>
    );
  }

  if (getType(contentPayload.marks) === 'bold') {
    return <b key={key}>{contentPayload.value}</b>;
  }

  if (getType(contentPayload.marks) === 'italic') {
    return <i key={key}>{contentPayload.value}</i>;
  }

  if (getType(contentPayload.marks) === 'text') {
    return <span key={key}>{contentPayload.value}</span>;
  }
};

const RichText = ({ payload, assets, limit }: Props): JSX.Element => {
  const content = limit ? payload.content?.slice(0, limit) : payload.content;
  return (
    <>
      {content?.map((payload, key) => {
        if (payload.nodeType === 'embedded-asset-block') {
          const asset = assets.find(
            (item) => item.sys.id === payload.data.target.sys.id
          );
          return (
            <div key={key} className="flex justify-center items-center m-6">
              <img
                className="max-h-96 max-w-[100%]"
                src={asset?.fields?.file?.url}
              />
            </div>
          );
        }

        if (
          payload.nodeType === 'unordered-list' ||
          payload.nodeType === 'ordered-list'
        ) {
          const listItems = payload.content?.map((innerList, key) => {
            if (innerList.nodeType === 'list-item') {
              return innerList.content.map((item) => (
                <li key={key}>{item?.content?.[0]?.value}</li>
              ));
            }
          });

          return (
            <ul key={key} className="list-disc space-y-1 list-inside mb-2">
              {listItems}
            </ul>
          );
        }

        if (payload.nodeType === 'paragraph') {
          const listItems: JSX.Element[] = payload.content?.map(
            (innerList, key) => {
              if (innerList.nodeType === 'hyperlink') {
                return (
                  <Link
                    to={innerList?.data?.uri}
                    classNames="text-orange-500 font-bold"
                    key={key}
                  >
                    {innerList.content?.[0]?.value}
                  </Link>
                );
              }
              return generateContentItems(innerList, key);
            }
          );

          return (
            <div key={key} className="mb-2">
              {listItems}
            </div>
          );
        }

        if (payload.nodeType === 'heading-1') {
          return (
            <h1 key={key} className="mb-2 text-xl font-bold">
              {payload?.content?.[0]?.value}
            </h1>
          );
        }

        if (payload.nodeType === 'heading-2') {
          return (
            <h2 key={key} className="mb-2 text-lg font-bold">
              {payload?.content?.[0]?.value}
            </h2>
          );
        }

        if (payload.nodeType === 'heading-3 text-lg font-bold') {
          return (
            <h3 key={key} className="mb-2 font-bold">
              {payload?.content?.[0]?.value}
            </h3>
          );
        }
      })}
    </>
  );
};

export default RichText;
