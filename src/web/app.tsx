import React from "react";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga4";

import Route from "./components/route/route";
import { Header } from "./components/header/header";

import "./style/tailwind.css";

const TRACKING_ID = "G-L6Z9V5VJE4";

ReactGA.initialize(TRACKING_ID);

export const AppRouter = (): JSX.Element => {
  const blurb = "";
  const title = "";

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={blurb} />
        <meta name="og:title" property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <div className="container mx-auto relative flex w-full flex-col">
        <Header></Header>
        <Route />
        <main className="flex-auto z-40">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default AppRouter;
