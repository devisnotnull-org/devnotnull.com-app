import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter } from "react-router-dom";
import ReactGA from 'react-ga';
import createSagaMiddleware from 'redux-saga'
// import TagManager from 'react-gtm-module'

import reducer from './common/reducer'

import AppRouter from './views/routes';

import './style/base.css';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

ReactGA.initialize('UA-136352816-1');

ReactGA.event({
  category: 'ITEM',
  action: 'ACTION',
  label: 'LABEL'
});

const tagManagerArgs = {
    gtmId: 'GTM-000000'
}

// TagManager.initialize(tagManagerArgs)

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
