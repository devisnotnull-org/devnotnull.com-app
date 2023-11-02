import React, { FC, useEffect } from 'react';
import Richtext from '@components/richtext/richtext'
import { useLoaderData } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getLinkedAsset } from '@core/blog/selectors';
import Link from '@web/components/link/link';
import { dateCaculator } from '../../../utils';

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

export const BlogPage: FC = () => {
  const data = useLoaderData();
  const commentBox = React.createRef();

  useEffect(() => {
    const commentScript = document.createElement('script')
    commentScript.async = true
    commentScript.src = 'https://utteranc.es/client.js'
    commentScript.setAttribute('repo', 'devisnotnull-org/devnotnull.com-app')
    commentScript.setAttribute('issue-term', 'pathname')
    commentScript.setAttribute('id', 'utterances')
    commentScript.setAttribute('label', 'comment')
    commentScript.setAttribute('crossorigin', 'anonymous')
    if (commentBox && commentBox.current) {
      commentBox.current.appendChild(commentScript)
    } else {
      console.log(`Error adding utterances comments on: ${commentBox}`)
    }
    const removeScript = () => {
      commentScript.remove();
      document.querySelectorAll(".utterances").forEach(el => el.remove());
    };
    return () => {
      removeScript();
    };
  }, [])

  const linkedAssetItems = useSelector(getLinkedAsset) ?? [];

  const asset = linkedAssetItems.find(assetItem => assetItem.sys.id === data?.data?.fields?.image?.[0]?.sys?.id);

  const dateUpdatedCaculatorResult = dateCaculator(new Date(data?.data?.sys?.updatedAt));
  const dateCreatedCaculatorResult = dateCaculator(new Date(data?.data?.sys?.createdAt));

  // Difference in days

  const isOriginal = new Date(data?.data?.sys?.updatedAt) === new Date(data?.data?.sys?.createdAt);

  const finalDate = isOriginal ? <span>Created {dateUpdatedCaculatorResult.unit} <b>{dateUpdatedCaculatorResult.unitType} ago</b></span> : <span>Updated <b>{dateUpdatedCaculatorResult.unit} {dateUpdatedCaculatorResult.unitType} ago</b> and published <b>{dateCreatedCaculatorResult.unit} {dateCreatedCaculatorResult.unitType} ago</b></span>

  return (  
    <article className='mt-5 p-5 md:p-10 bg-white rounded-lg shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur text-base'>
      <h1 className='text-2xl pb-3.5 font-bold font-harman'>
      {data?.data?.fields?.title ?? ''}
      </h1>
      <div className='pb-3.5'>
        {data?.data?.fields?.summary}
      </div>
      <div className='pb-3.5'>
        {data?.data?.metadata?.tags.map(tag => <Link to={`/blog/tags/${tag?.sys?.id}`}><span className='mt-10 relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100'>{tag?.sys?.id}</span></Link>)}
      </div>
      <div className='text-sm text-gray-500 mb-3'>
        {finalDate}
      </div>
      <div  className='m-5'>
        <img src={asset?.fields?.file?.url}/>
      </div>
      <div>
        <Richtext assets={data?.data?.includes?.Asset ? data?.data?.includes?.Asset : []} payload={data?.data?.fields?.blogContent}/>
        <div ref={commentBox} />
      </div>
    </article>
  );
};

export default BlogPage;
