import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import BlogItem from '@components/blogItem/blogItem'
import { getBlogItems, getLinkedAsset } from '../../../core/blog/selectors';
import { IBlogComponentProps } from './blogPage.state';
import blogStyles from './blogPage.css';

export type IProps = {
  to: string;
};

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

export const BlogView: FC<IBlogComponentProps> = () => {
  const blogItems = useSelector(getBlogItems);
  const linkedAssetItems = useSelector(getLinkedAsset) ?? [];

  return (
    <div className={blogStyles.InnerContainer}>
      {blogItems.map(item => {
        return (
          <div className={blogStyles['Entry--Container']}>
            <h1 className={blogStyles['Entry--Header']}>
              {item?.fields?.title ?? ''}
            </h1>
            <div>
              {item?.fields?.blogContent?.content &&
                <BlogItem assets={linkedAssetItems} content={item?.fields} />
              }
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BlogView;
