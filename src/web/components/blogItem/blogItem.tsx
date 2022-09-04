import React, { FC } from 'react';

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
  return (
    <>
    <Richtext payload={content.blogContent} assets={assets} />
    <a href={`/blog/${content.slug}`}><b>Click to view full article</b></a>
    </>
  )
  }

export default BlogItemm;
