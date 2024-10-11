import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLoaderData } from 'react-router-dom';
import { Blog } from '../../../models/blog';
import { IAsset } from '../../../models/common';
import Article from '@web/components/article/article';
import { SEO } from '@web/components/seo/seo';

export const BlogView = (): JSX.Element => {
  const { items, assets, total, page } = useLoaderData() as {
    items: Blog[];
    assets: IAsset[];
    page: number;
    total: number;
    totalPages: number;
  };
  return (
    <>
      <SEO
        title={'Alex Brown - Blog'}
        description={'Alex Brown - Blog'}
        name={'Alex Brown - Blog'}
        type="website"
      />

      <div className="p-5 md:p-10 bg-white rounded-lg shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur text-base">
        <h1 className="text-2xl md:pb-3.5 md:mb-2 pb-2.5 text-left font-bold text-gray-600 font-harman">
          {useTranslation().t('LatestBlogPosts')}
        </h1>

        <div className="py-1 inset-x-1 -bottom-px h-px bg-gradient-to-r from-zinc-100 to-teal-zinc mb-5"></div>

        <main>
          {items.map((item) => (
            <Article item={item} assets={assets} isPreview={true} />
          ))}
        </main>

        <nav
          className="flex items-center justify-between border-t border-gray-200 bg-white py-3"
          aria-label="Pagination"
        >
          <div className="hidden sm:block">
            <p className="text-sm text-gray-700">
              Showing{' '}
              <span className="font-medium">{page && page * 10 + 1 - 10}</span>{' '}
              to <span className="font-medium">{page && page * 10}</span> of{' '}
              <span className="font-medium">{total}</span> results
            </p>
          </div>
          <div className="flex flex-1 justify-between sm:justify-end">
            {page > 1 && (
              <Link
                to={`/blog/page/${page - 1}`}
                className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
              >
                {useTranslation().t('Previous')}
              </Link>
            )}
            {page * 10 < total && (
              <Link
                to={`/blog/page/${page + 1}`}
                className="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
              >
                {useTranslation().t('Next')}
              </Link>
            )}
          </div>
        </nav>
      </div>
    </>
  );
};

export default BlogView;
