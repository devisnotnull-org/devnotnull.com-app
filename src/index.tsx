import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter } from "react-router-dom";
import ReactGA from 'react-ga';
import createSagaMiddleware from 'redux-saga'

import reducer from './common/reducer'
import AppRouter from './containers/routes';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

ReactGA.initialize('UA-136352816-1');

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
