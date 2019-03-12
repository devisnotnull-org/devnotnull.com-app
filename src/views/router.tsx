import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import classnames from "classnames";

import HomeViewComponent from './home/home';
import BlogViewComponent from './blog/blog';
import NotFoundComponent from './notFound/notFound';
import Header from '../components/header/header';

import * as style from '../style/common.css'

interface StateProps {}
interface ActionProps {}
interface SelectorProps {}

type Props = StateProps | ActionProps | SelectorProps

class AppRouter extends React.Component<Props> {
  render() {
    return (
      <Router>
          <Switch>
              <Route exact path="/" component={HomeViewComponent} />
              <Route exact path="/blog/" component={BlogViewComponent} />
              <Route component={NotFoundComponent} />
          </Switch>
    </Router>
    )
  }
}

export default AppRouter;
