import React from 'react';
import { Outlet } from 'react-router-dom';
import ReactGA from 'react-ga4';
import { HelmetProvider } from 'react-helmet-async';
import { SEO } from './components/seo/seo';
import Route from './components/route/route';
import { Header } from './components/header/header';

import './style/tailwind.css';

const TRACKING_ID = 'G-L6Z9V5VJE4';

ReactGA.initialize(TRACKING_ID);

export const AppRouter = (): JSX.Element => {
  const blurb = 'Alex Brown - Software Engineer';
  const title = 'Alex Brown - Software Engineer';

  return (
    <HelmetProvider>
      <SEO title={title} description={blurb} name={title} type="website" />
      <div className="container mx-auto relative flex w-full flex-col">
        <Header/>
        <Route />
        <main className="flex-auto z-40">
          <Outlet />
        </main>
      </div>
    </HelmetProvider>
  );
};

export default AppRouter;
