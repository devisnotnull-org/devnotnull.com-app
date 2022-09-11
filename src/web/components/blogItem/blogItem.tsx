import React, { FC, useState } from 'react';
import classnames from 'classnames';
import { useInView } from 'react-intersection-observer';

import Richtext from "@components/richtext/richtext"
import { ICommonDataNode } from 'models/common';

import style from './blogItem.css'

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
    <div ref={ref} className={classnames(style['Entry--FadeIn'], (viewed) ? style['FadeIn'] : undefined)}>
      <Richtext payload={content.blogContent} assets={assets} />
      <a href={`/blog/${content.slug}`}><b>Click to view full article</b></a>
    </div>
  )
}

export default BlogItemm;
