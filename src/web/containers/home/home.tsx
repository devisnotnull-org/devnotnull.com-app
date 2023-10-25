import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { getAbilityItems } from '@core/ability/selectors';
import { getExperianceItems } from '@core/experiance/selectors';
import { getEducationItems } from '@core/education/selectors';
import { getMetadata } from '@core/metadata/selectors';

import About from '@components/about/about';
import Skillz from '@components/skillz/skillz';
import Experiance from '@components/experiance/experiance';
import Education from '@components/education/education';
import { getBlogItems, getLinkedAsset } from '@core/blog/selectors';
import { findAsset } from '../../../utils';

export const HomeView: FC = () => {
  const abilityItems = useSelector(getAbilityItems);
  const educationItems = useSelector(getEducationItems);
  const experianceItems = useSelector(getExperianceItems);
  const blogItems = useSelector(getBlogItems);
  const linkedAssetItems = useSelector(getLinkedAsset) ?? [];

  const metadata = useSelector(getMetadata);

  const topBlog = blogItems.slice(0,3)

  return (
    <div className='mt-10'>
      <About metadata={metadata} />
      <div className="border border-zinc-50 m-5"></div>
      <h1 className='text-2xl py-3.5 text-center'>Newest blog posts</h1>

      <div className="bg-white py-5 sm:py-5 my-2">
          <div className="mx-auto">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-10 gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {topBlog.map((post) => (
                <article className="flex flex-col items-start justify-between">
                  <div className="relative w-full">
                    <img
                      src={findAsset(post.fields.image?.[0]?.sys?.id, linkedAssetItems)?.fields?.file?.url}
                      alt=""
                      className="rounded-2xl object-contain h-48 w-96 p-3"
                    />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="max-w-xl">
                    <div className="mt-8 flex items-center gap-x-4 align-top">
                      <a
                        href="/"
                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                      >
                        {post.fields.title}
                      </a>
                    </div>
                    <div className="group relative">
              
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className='text-right mt-3'>
            <a
              href="/blog"
              className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
            >
              Click here to view all blog posts
            </a>
          </div>
      </div>
      <div className="border border-zinc-50 m-"></div>
      <Experiance experianceList={experianceItems} />
      <div className="border border-zinc-50"></div>
      <Education educationList={educationItems} />
      <div className="border border-zinc-50"></div>
      <Skillz abilitiesList={abilityItems} />
    </div>
  );
};

export default HomeView;
