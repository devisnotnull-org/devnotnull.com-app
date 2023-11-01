import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import BlogItem from '@components/blogItem/blogItem'

import { getLinkedAsset } from '../../../core/blog/selectors';
import Link from '@web/components/link/link';
import { useLoaderData } from 'react-router-dom';
import { dateCaculator } from '../../../utils';

export const TaggedBlogView: FC = () => {
  const data = useLoaderData();
  const linkedAssetItems = useSelector(getLinkedAsset) ?? [];

  return (
    <div className='mt-5 p-5 md:p-10 bg-white rounded-lg shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur text-base'>

      <h1 className='text-2xl pb-3.5 mb-2 md:7 text-left font-bold text-gray-600 font-harman'>Tagged posts <span className='mt-20 relative rounded-full bg-gray-50 p-3 m-3 font-large text-gray-600 hover:bg-gray-100 font-bold'>{data.id}</span></h1>
      
      <div className='py-1 inset-x-1 -bottom-px h-px bg-gradient-to-r from-zinc-100 to-teal-zinc'></div>
  
      <main className='mt-10'>
        {data.data.items.map(item => {

        const asset = linkedAssetItems.find(assetItem => assetItem.sys.id === item?.fields?.image?.[0]?.sys?.id);
        
        const dateUpdatedCaculatorResult = dateCaculator(new Date(item?.sys?.updatedAt));
        const dateCreatedCaculatorResult = dateCaculator(new Date(item?.sys?.createdAt));

        // Difference in days

        const isOriginal = new Date(item?.sys?.updatedAt) === new Date(item?.sys?.createdAt);

        const finalDate = isOriginal ? <span>Created {dateUpdatedCaculatorResult.unit} <b>{dateUpdatedCaculatorResult.unitType} ago</b></span> : <span>Updated <b>{dateUpdatedCaculatorResult.unit} {dateUpdatedCaculatorResult.unitType} ago</b> and published <b>{dateCreatedCaculatorResult.unit} {dateCreatedCaculatorResult.unitType} ago</b></span>

          return (
            <article className='animate-fade-down animate-once animate-delay-100 animate-ease-in-out animate-normal'>
              <h1 className='text-2xl pb-3.5 font-bold'>
                <Link to={`/blog/${item.fields.slug}`}>
                  {item?.fields?.title ?? ''}
                </Link>
              </h1>
              <div className='pb-3.5'>
                {item?.fields?.summary}
              </div>
              <div className='text-sm text-gray-500'>
              {finalDate} {item?.metadata?.tags.map(tag => <span className='mt-10 relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100'>{tag?.sys?.id}</span>)}
              </div>
              <div className='flex justify-center items-center'>
                <img src={asset?.fields?.file?.url} className='m-10 p-10 rounded-lg shadow-lg ring-1 ring-zinc-200 backdrop-blur shadow-zinc-200 hover:shadow-orange-500/40 hover:ring-orange-500 transition'/>
              </div>
              <div>
                {item?.fields &&
                  <BlogItem assets={linkedAssetItems} content={item.fields} limit={5} />
                }
              </div>
            </article>
          );
        })}
      </main>
    </div>
  );
};

export default TaggedBlogView;