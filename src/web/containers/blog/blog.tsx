import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import BlogItem from '@components/blogItem/blogItem'

import { getBlogItems, getLinkedAsset } from '../../../core/blog/selectors';

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
  const blogItems = useSelector(getBlogItems);
  const linkedAssetItems = useSelector(getLinkedAsset) ?? [];

  console.log(blogItems)
  return (
    <div className='mt-28'>
      {blogItems.map(item => {

      console.log(item?.fields?.image?.[0]?.sys?.id)
      console.log(item?.metadata?.tags)

      const asset = linkedAssetItems.find(assetItem => assetItem.sys.id === item?.fields?.image?.[0]?.sys?.id);
            
        return (

          <article>
            <h1 className='text-2xl py-3.5'>
              {item?.fields?.title ?? ''}
            </h1>
            <div className='text-sm text-gray-500'>
              {item?.metadata?.tags.map(tag => <span className='mt-10 relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100'>{tag?.sys?.id}</span>)}
            </div>
            <div>
              Created {item?.sys?.createdAt}
            </div>
            <div>
              Updated {item?.sys?.updatedAt}
            </div>
            <div>
              <img src={asset?.fields?.file?.url}/>
            </div>
            <div>
              {item?.fields &&
                <BlogItem assets={linkedAssetItems} content={item.fields} />
              }
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default BlogView;
