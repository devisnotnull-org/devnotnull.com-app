import React from 'react';
import type { LoaderFunctionArgs, RouteObject } from 'react-router-dom';

import './i8';

import AppRouter from './app';

import Home from './containers/home/home';
import Blog from './containers/blog/blog';
import BlogPageViewContainer from './containers/blogPage/blogPage';
import NotFound from './containers/notFound/notFound';
import { fetchBlogItem } from '@core/blogItem/fetch';
import TagsView from './containers/tags/tags';
import { fetchTags } from '@core/tags/fetch';
import { fetchBlog, fetchTaggedBlog } from '@core/blog/fetch';
import TaggedBlogView from './containers/taggedBlog/taggedBlog';
import { fetchExperiance } from '@core/experiance/fetch';
import { fetchMetadata } from '@core/metadata/fetch';

export const routes: RouteObject[] = [
  {
    path: '/',
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
        path: 'blog',
        element: <Blog />,
        loader: async () => {
          const blogItems = await fetchBlog();
          const totalPages = Math.ceil(blogItems.data.payload.total / 10);
          return {
            items: blogItems?.data?.payload?.items ?? [],
            assets: blogItems?.data?.payload?.includes.Asset,
            page: 1,
            totalPages,
            total: blogItems.data.payload.total,
          };
        },
      },
      {
        path: 'blog/page/:page',
        element: <Blog />,
        loader: async ({ params }: LoaderFunctionArgs) => {
          const blogItems = await fetchBlog();
          const totalPages = Math.ceil(blogItems.data.payload.total / 10);
          return {
            items: blogItems?.data?.payload?.items ?? [],
            assets: blogItems?.data?.payload?.includes.Asset,
            totalPages,
            page: params.page,
            total: blogItems.data.payload.total,
          };
        },
      },
      {
        path: 'blog/:id',
        element: <BlogPageViewContainer />,
        loader: async ({ params }: LoaderFunctionArgs) => {
          const blogItem = await fetchBlogItem(params?.id ?? '');
          return {
            item: blogItem?.data?.payload ?? [],
            assets: blogItem?.data?.payload?.includes.Asset,
          };
        },
      },
      {
        path: 'blog/tags',
        element: <TagsView />,
        loader: async () => {
          const blogItem = await fetchTags();
          return { items: blogItem?.data?.payload?.items ?? [] };
        },
      },
      {
        path: 'blog/tags/:tag',
        element: <TaggedBlogView />,
        loader: async ({ params }: LoaderFunctionArgs) => {
          const blogItem = await fetchTaggedBlog(params.tag ?? '');
          return {
            items: blogItem?.data?.payload?.items ?? [],
            assets: blogItem?.data?.payload?.includes.Asset,
            id: params.tag,
          };
        },
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
];
