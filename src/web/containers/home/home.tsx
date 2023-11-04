import React, { FC } from "react";

import About from "@components/about/about";
import Experiance from "@components/experiance/experiance";
import { findAsset } from "../../../utils";
import Link from "@web/components/link/link";
import { useLoaderData } from "react-router-dom";

export const HomeView: FC = () => {
  const { items, includes, experiance, metadata } = useLoaderData();

  const topBlog = items.slice(0, 3);

  console.log("topBlog", topBlog);
  console.log("metadata", metadata);

  return (
    <div className="mt-5 p-5 md:p-10 bg-white rounded-lg shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur text-base">
      <h1 className="text-2xl pb-3.5 mb-2 md:7 text-left font-bold text-gray-600 font-harman">
        About me
      </h1>

      <div className="py-1 inset-x-1 -bottom-px h-px bg-gradient-to-r from-zinc-100 to-teal-zinc mb-5"></div>
      <About metadata={metadata} />
      <div className="mt-12">
        <div className="py-1 inset-x-1 -bottom-px h-px bg-gradient-to-r from-zinc-100 to-teal-zinc"></div>
      </div>
      <h1 className="text-2xl py-3.5 my-2 md:7 text-left font-bold text-gray-600 font-harman">
        Newest blog posts
      </h1>
      <div className="bg-white">
        <div className="mx-auto">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-10 gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {topBlog.map((post) => (
              <article
                key={post?.sys?.id}
                className="flex flex-col items-start"
              >
                <Link
                  to={`/blog/${post.fields.slug}`}
                  className="relative z-10"
                >
                  <div className="relative w-full">
                    <img
                      src={`${findAsset(
                        post.fields.image?.[0]?.sys?.id,
                        includes?.Asset,
                      )?.fields?.file?.url}?fm=webp`}
                      alt=""
                      className="object-contain h-48 w-96 p-3"
                    />
                  </div>
                  <div className="max-w-xl">
                    <div className="mt-8 flex items-center gap-x-4 font-medium text-gray-600 font-harman">
                      {post.fields.title}
                    </div>
                    <div className="group relative">
                      {post?.fields?.summary}
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
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
      <div className="mt-12">
        <div className="py-1 inset-x-1 -bottom-px h-px bg-gradient-to-r from-zinc-100 to-teal-zinc"></div>
      </div>
      <h1 className="text-2xl py-3.5 my-2 md:7 text-left font-bold text-gray-600 font-harman">
        Experience
      </h1>
      <Experiance experianceList={experiance} />
    </div>
  );
};

export default HomeView;
