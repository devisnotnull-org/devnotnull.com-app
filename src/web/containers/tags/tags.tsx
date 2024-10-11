import React from 'react';

import Link from '@web/components/link/link';
import { useLoaderData } from 'react-router-dom';

export const TagsView = (): JSX.Element => {
  const { items } = useLoaderData() as any;
  return (
    <div className="p-5 md:p-10 bg-white rounded-lg shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur text-base">
      <h1 className="text-2xl md:pb-3.5 md:mb-2 pb-2.5 text-left font-bold text-gray-600 font-harman">
        Popular tags
      </h1>
      <div className="py-1 inset-x-1 -bottom-px h-px bg-gradient-to-r from-zinc-100 to-teal-zinc mb-5"></div>
      <main className="mt-10">
        {items?.map((item) => (
          <Link
            to={`/blog/tags/${item.name}`}
            classNames="inline-block mr-1 pb-6"
          >
            <span className="mt-20 relative rounded-full bg-gray-50 p-3 m-1 font-large text-gray-600 hover:bg-gray-100 font-bold">
              {item.name}
            </span>
          </Link>
        ))}
      </main>
    </div>
  );
};

export default TagsView;
