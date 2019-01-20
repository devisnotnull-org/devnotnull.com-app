import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import HomeViewComponent from './views/home/home';
import BlogViewComponent from './views/blog/blog';
import NotFoundComponent from './views/notFound/notFound';

interface StateProps {}

interface ActionProps {}

interface SelectorProps {}

type Props = SelectorProps | ActionProps | SelectorProps

const AppRouter: React.SFC<Props> = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog/">Blog</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={HomeViewComponent} />
        <Route exact path="/blog/" component={BlogViewComponent} />
        <Route component={NotFoundComponent} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
