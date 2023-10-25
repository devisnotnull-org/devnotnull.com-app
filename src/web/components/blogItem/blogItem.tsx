import React, { FC, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import Richtext from "@components/richtext/richtext"
import { ICommonDataNode } from 'models/common';

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
    
  const [viewed, setViewed] = useState(false)
  const { ref, inView } = useInView({
    threshold: 0,
  });

  if(inView === true && viewed === false) setViewed(true)

  return (
    <div ref={ref} className='mb-10'>
      <Richtext payload={content.blogContent} assets={assets} />
      <div className='mt-10'>
        <a href={`/blog/${content.slug}`} className='mt-10 relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100'>Click to view full article</a>
      </div>
    </div>
  )
}

export default BlogItemm;
