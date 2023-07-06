import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import ReactGA from 'react-ga';

import HeaderViewContainer from './containers/header/header';
import HomeViewContainer from './containers/home/home';
import FolioViewContainer from './containers/folio/folio';
import BlogViewContainer from './containers/blog/blog';
import BlogPageViewContainer from './containers/blogPage/blogPage';
import NotFoundComponent from './containers/notFound/notFound';

import { getMetadataBlurb, getMetadataTitle } from '../core/metadata/selectors';

import styles from './style/common.css';

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
      <HeaderViewContainer />
      <div className={styles['Container']}>
        <Routes>
          <Route path="/" element={<HomeViewContainer/>} />
          <Route path="/portfolio" element={<FolioViewContainer/>} />
          <Route path="/blog" element={<BlogViewContainer/>} />
          <Route path="/blog/:slug" element={<BlogPageViewContainer/>} />
          <Route element={<NotFoundComponent/>} />
        </Routes>
      </div>
    </>
  );
};
export default AppRouter;
