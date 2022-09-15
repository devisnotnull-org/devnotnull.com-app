import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import Richtext from '@components/richtext/richtext'
import { getBlogContent, getBlogAssets } from '../../../core/blogItem/selectors';

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

export const BlogView: FC = () => {
  const blogItem = useSelector(getBlogContent);
  const getBlogTitle = useSelector(getBlogContent);
  const linkedAssetItems = useSelector(getBlogAssets) ?? [];

  return (
    <div className={blogStyles.InnerContainer}>
  
        <div className={blogStyles['Entry--Container']}>
          <h1 className={blogStyles['Entry--Header']}>
            {getBlogTitle ?? ''}
          </h1>
          <div>
            {blogItem?.content &&
              <Richtext assets={linkedAssetItems ? linkedAssetItems : []} payload={blogItem} />
            }
          </div>
        </div>
   
    </div>
  );
};

export default BlogView;
