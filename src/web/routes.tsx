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
import { fetchTaggedBlog } from "@core/blog/fetch";
import TaggedBlogView from "./containers/taggedBlog/taggedBlog";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <AppRouter />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => {
          return { data: "Home loader" };
        },
      },
      {
        path: "blog",
        element: <Blog />,
        loader: async () => {
          return { data: "Blog loader" };
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
          return { data: blogItem?.data?.payload };
        },
      },
      {
        path: "blog/tags",
        element: <TagsView />,
        loader: async () => {
          const blogItem = await fetchTags();
          return { data: blogItem?.data?.payload };
        },
      },
      {
        path: "blog/tags/:tag",
        element: <TaggedBlogView />,
        loader: async ({ params }: LoaderFunctionArgs) => {
          const blogItem = await fetchTaggedBlog(params.tag ?? "");
          return { data: blogItem?.data?.payload, id: params.tag };
        },
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];
