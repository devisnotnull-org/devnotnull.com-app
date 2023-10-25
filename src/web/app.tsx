import React from 'react';
import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import ReactGA from 'react-ga';

import HeaderViewContainer from './containers/header/header';

import { getMetadataBlurb, getMetadataTitle } from '../core/metadata/selectors';

import './style/tailwind.css';

const TRACKING_ID = "UA-136352816-2";

ReactGA.initialize(TRACKING_ID);

export const AppRouter: React.FC = () => {
  const blurb = useSelector(getMetadataBlurb);
  const title = useSelector(getMetadataTitle);

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={blurb} />
        <meta name="og:title" property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
      </Helmet>
      <div className={"container xl mx-auto w-full bg-white ring-1 ring-zinc-100"}>
        <HeaderViewContainer />
        <div className='mx-10'>
          <Outlet/>
        </div>
      </div>
    </>
  );
};

/**
  <div className='m-16'>
    <Routes>
      <Route path="/" element={<HomeViewContainer/>} />
      <Route path="/portfolio" element={<FolioViewContainer/>} />
      <Route path="/blog" element={<BlogViewContainer/>} />
      <Route path="/blog/:slug" element={<BlogPageViewContainer/>} />
      <Route element={<NotFoundComponent/>} />
    </Routes>
  </div>
 */

export default AppRouter;
