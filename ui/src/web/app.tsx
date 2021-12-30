import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';

import HeaderViewContainer from './containers/header/header';
import HomeViewContainer from './containers/home/home';
import FolioViewContainer from './containers/folio/folio';
import BlogViewContainer from './containers/blog/blog';
import NotFoundComponent from './containers/notFound/notFound';

import { GlobalContextProvider } from '../web/context/theme';

import { getMetadataBlurb, getMetadataTitle } from '../core/metadata/selectors';

import styles from './style/common.css';

interface StateProps {}
interface ActionProps {}
interface SelectorProps {}

type Props = StateProps & ActionProps & SelectorProps;

export const AppRouter: React.FC<Props> = () => {
  const blurb = useSelector(getMetadataBlurb);
  const title = useSelector(getMetadataTitle);

  return (
    <>
      <GlobalContextProvider>
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
          <Switch>
            <Route exact path="/" component={HomeViewContainer} />
            <Route exact path="/portfolio" component={FolioViewContainer} />
            <Route exact path="/blog" component={BlogViewContainer} />
            <Route exact path="/blog/:id" component={BlogViewContainer} />
            <Route component={NotFoundComponent} />
          </Switch>
        </div>
      </GlobalContextProvider>
    </>
  );
};
export default AppRouter;
