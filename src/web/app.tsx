import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import HeaderViewContainer from './containers/header/header';

import HomeViewContainer from './containers/home/home';
import FolioViewContainer from './containers/folio/folio';
import BlogViewContainer from './containers/blog/blog';
import NotFoundComponent from './containers/notFound/notFound';

import * as styles from './style/common.css';

interface StateProps {}
interface ActionProps {}
interface SelectorProps {}

type Props = StateProps & ActionProps & SelectorProps;

class AppRouter extends React.Component<Props> {
  render() {
    return (
      <>
        <Helmet>
          <title>Devnotnull.com - Alex Brown Blog and Folio</title>
          <meta
            name="description"
            content="Devnotnull - The personal website of Alex Brown @stump201 @devisnotnull"
          />
          <meta
            name="og:title"
            property="og:title"
            content="Devnotnull - The personal website of Alex Brown @stump201 @devisnotnull"
          />
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
      </>
    );
  }
}

export default AppRouter;
