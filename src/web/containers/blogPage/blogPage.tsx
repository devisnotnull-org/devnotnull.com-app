import React from "react";
import { useLoaderData } from "react-router-dom";
import Article from "@web/components/article/article";
import { SEO } from "@web/components/seo/seo";

export const BlogPage = (): JSX.Element => {
  const { item, assets } = useLoaderData();

  return (
    <>
      <SEO
        title={item?.fields?.summary}
        description={item?.fields?.summary}
        name={item?.fields?.summary}
        type="website"
      />
      <div className="p-5 md:p-10 bg-white rounded-lg shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur text-base">
        <main>
          <Article item={item} assets={assets} isPreview={false} />
        </main>
      </div>
    </>
  );
};

export default BlogPage;
