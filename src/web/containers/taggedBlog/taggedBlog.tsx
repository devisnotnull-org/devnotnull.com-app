import React from "react";

import { useLoaderData } from "react-router-dom";
import { Blog } from "../../../models/blog";
import { IAsset } from "../../../models/common";
import Article from "@web/components/article/article";

export const TaggedBlogView = (): JSX.Element => {
  const { items, assets, id } = useLoaderData() as {
    items: Blog[];
    assets: IAsset[];
    id: string;
  };
  return (
    <div className="p-5 md:p-10 bg-white rounded-lg shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur text-base">
      <h1 className="text-2xl md:pb-3.5 md:mb-2 pb-2.5 text-left font-bold text-gray-600 font-harman">
        Tagged posts{" "}
        <span className="mt-20 relative rounded-full bg-gray-50 p-3 m-3 font-large text-gray-600 hover:bg-gray-100 font-bold">
          {id}
        </span>
      </h1>

      <div className="py-1 inset-x-1 -bottom-px h-px bg-gradient-to-r from-zinc-100 to-teal-zinc mb-5"></div>

      <main>
        {items.map((item) => (
          <Article item={item} assets={assets} isPreview={true} />
        ))}
      </main>
    </div>
  );
};

export default TaggedBlogView;
