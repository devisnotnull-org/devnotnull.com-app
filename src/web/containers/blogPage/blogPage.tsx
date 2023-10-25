import React, { FC, useEffect } from 'react';
import Richtext from '@components/richtext/richtext'
import { useLoaderData } from 'react-router-dom';

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

  return (  
    <article className='mt-28'>
      <h1 className='text-2xl py-3.5'>
        {data?.data?.fields?.title ?? ''}
      </h1>
      <div>
          <Richtext assets={data?.data?.includes?.Asset ? data?.data?.includes?.Asset : []} payload={data?.data?.fields?.blogContent} />
          <div ref={commentBox} />
      </div>
    </article>
  );
};

export default BlogPage;
