import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Helmet } from 'react-helmet';

import HomeViewContainer from './home/home';
import BlogViewContainer from './blog/blog';
import NotFoundComponent from './notFound/notFound';

interface StateProps {}
interface ActionProps {}
interface SelectorProps {}

type Props = StateProps & ActionProps & SelectorProps

class AppRouter extends React.Component<Props> {
  render() {
    return (
      <>
        <Helmet>
            <title>Fandanzle - Alex Brown</title>
            <meta name="description" content="Fandanzle - The personal website of Alex Brown @stump201 @fandanzle" />
            <meta name="og:title" property="og:title" content="Fandanzle - The personal website of Alex Brown @stump201 @fandanzle"/>
            <meta property="og:type" content="website" />
            <meta name="robots" content="index, follow" />
        </Helmet>
      <Switch>
          <Route exact path="/" component={HomeViewContainer} />
          <Route exact path="/blog" component={BlogViewContainer} />
          <Route exact path="/blog/:id" component={BlogViewContainer} />

          <Route component={NotFoundComponent} />
      </Switch>
      </>
    )
  }
}

export default AppRouter;
