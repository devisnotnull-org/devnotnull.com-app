import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import createSagaMiddleware from 'redux-saga'

import reducer from './common/reducer'

import './style/base.css';

import AppRouter from './views/router';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

ReactDOM.render(
    <Provider store={store}>
        <AppRouter />,
    </Provider>,
    document.getElementById('root')
);
