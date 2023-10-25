import React from 'react';
import type { LoaderFunctionArgs, RouteObject } from "react-router-dom";
import AppRouter from './app'

import Home from './containers/home/home';
import Blog from './containers/blog/blog';
import BlogPageViewContainer from './containers/blogPage/blogPage';
import NotFound from './containers/notFound/notFound';
import { fetchBlogItem } from '@core/blogItem/fetch';

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <AppRouter/>,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => {
          console.log("Home loader")
          return { data: "Home loader" };
        }
      },
      {
        path: "blog",
        element: <Blog />,
        loader: async () => { 
          return { data: "Blog loader" };
        },
      },
      {
        path: "blog/:id",
        element: <BlogPageViewContainer/>,
        loader: async ({
          params,
        }: LoaderFunctionArgs) => {
          const blogItem = await fetchBlogItem(params?.id ?? '');
          console.log("blogItem", blogItem.data.payload)
          return { data: blogItem?.data?.payload}
        },
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];

/**
const sleep = (n = 500) => new Promise((r) => setTimeout(r, n));
const rand = () => Math.round(Math.random() * 100);

async function homeLoader() {
  await sleep();
  return { data: `Home loader - random value ${rand()}` };
}

function Home() {
  let data = useLoaderData();
  return (
    <div>
      <h2>Home</h2>
      <p>Loader Data: {data.data}</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

async function dashboardLoader() {
  await sleep();
  return { data: `Dashboard loader - random value ${rand()}` };
}

function Dashboard() {
  let data = useLoaderData();
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Loader Data: {data.data}</p>
    </div>
  );
}

async function redirectLoader() {
  await sleep();
  return redirect("/");
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

**/