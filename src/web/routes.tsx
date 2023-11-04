import React from "react";
import type { LoaderFunctionArgs, RouteObject } from "react-router-dom";

import AppRouter from "./app";

import Home from "./containers/home/home";
import Blog from "./containers/blog/blog";
import BlogPageViewContainer from "./containers/blogPage/blogPage";
import NotFound from "./containers/notFound/notFound";
import { fetchBlogItem } from "@core/blogItem/fetch";
import DownloadView from "./containers/download/download";
import TagsView from "./containers/tags/tags";
import { fetchTags } from "@core/tags/fetch";
import { fetchBlog, fetchTaggedBlog } from "@core/blog/fetch";
import TaggedBlogView from "./containers/taggedBlog/taggedBlog";
import { fetchExperiance } from "@core/experiance/fetch";
import { fetchMetadata } from "@core/metadata/fetch";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <AppRouter />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: async () => {
          const experianceItems = await fetchExperiance();
          const blogItems = await fetchBlog();
          const metaData = await fetchMetadata();
          return {
            items: blogItems?.data?.payload?.items ?? [],
            includes: blogItems?.data?.payload?.includes,
            experiance: experianceItems.data?.payload?.items,
            metadata: metaData?.data?.payload?.items?.[0],
          };
        },
      },
      {
        path: "blog",
        element: <Blog />,
        loader: async () => {
          const blogItems = await fetchBlog();
          return {
            items: blogItems?.data?.payload?.items ?? [],
            includes: blogItems?.data?.payload?.includes,
          };
        },
      },
      {
        path: "cv",
        element: <DownloadView />,
      },
      {
        path: "blog/:id",
        element: <BlogPageViewContainer />,
        loader: async ({ params }: LoaderFunctionArgs) => {
          const blogItem = await fetchBlogItem(params?.id ?? "");
          return {
            item: blogItem?.data?.payload ?? [],
            includes: blogItem?.data?.payload?.includes,
          };
        },
      },
      {
        path: "blog/tags",
        element: <TagsView />,
        loader: async () => {
          const blogItem = await fetchTags();
          return { items: blogItem?.data?.payload?.items ?? [] };
        },
      },
      {
        path: "blog/tags/:tag",
        element: <TaggedBlogView />,
        loader: async ({ params }: LoaderFunctionArgs) => {
          const blogItem = await fetchTaggedBlog(params.tag ?? "");
          return {
            items: blogItem?.data?.payload?.items ?? [],
            includes: blogItem?.data?.payload?.includes,
            id: params.tag,
          };
        },
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];
