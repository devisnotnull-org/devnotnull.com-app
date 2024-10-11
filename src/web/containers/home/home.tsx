import React from 'react';

import About from '@components/about/about';

import Experiance from '@components/experiance/experiance';
import { findAsset } from '../../../utils';
import Link from '@web/components/link/link';
import { useLoaderData } from 'react-router-dom';

export const HomeView = (): JSX.Element => {
  const { items, includes, experiance, metadata } = useLoaderData();

  const topBlog = items.slice(0, 4);

  return (
    <div className="p-5 md:p-10 bg-white rounded-lg shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur text-base">
      <About metadata={metadata} />

      <div className="py-1 inset-x-1 -bottom-px h-px bg-gradient-to-r from-zinc-100 to-teal-zinc mt-2.5 md:mt-5"></div>
      <h1 className="text-2xl text-left font-bold text-gray-600 font-harman py-2.5 md:py-5">
        Latest blog posts
      </h1>

      <div>
        <div className="grid grid-cols-1 gap-x-5 lg:mx-0 lg:max-w-none md:grid-cols-4">
          {topBlog.map((post) => (
            <article key={post?.sys?.id}>
              <Link
                to={`/blog/${post.fields.slug}`}
                className="relative z-10 flex"
              >
                <div className="flex md:block">
                  <div className="relative">
                    <img
                      src={`${findAsset(
                        post.fields.image?.[0]?.sys?.id,
                        includes?.Asset
                      )?.fields?.file?.url}?fm=webp`}
                      alt=""
                      className="object-contain h-32 md:h-52 w-32 md:w-52"
                    />
                  </div>
                  <div className="flex-1 pl-5 md:pl-0">
                    <div className="mt-0 md:mt-1 md:mt-8 flex items-center gap-x-4 font-medium text-gray-600 font-harman">
                      {post.fields.title}
                    </div>
                    <div className="group relative">
                      {post?.fields?.summary}
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="text-right mt-3">
          <a
            href="/blog"
            className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
          >
            Click here to view all blog posts
          </a>
        </div>
      </div>

      <div className="py-1 inset-x-1 -bottom-px h-px bg-gradient-to-r from-zinc-100 to-teal-zinc mt-2.5 md:mt-5"></div>
      <h1 className="text-2xl text-left font-bold text-gray-600 font-harman py-2.5 md:py-5">
        Experience
      </h1>

      <Experiance experianceList={experiance} />
    </div>
  );
};

export default HomeView;
