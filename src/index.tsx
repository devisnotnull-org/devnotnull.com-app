import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router-dom";
import ReactGA from 'react-ga';

import { store } from './common/store'
import AppRouter from './containers/routes';

import {} from './common/store';

declare global {
  interface Window { MyNamespace: any; }
}

window.MyNamespace = window.MyNamespace || {};

ReactGA.initialize('UA-136352816-1');

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
