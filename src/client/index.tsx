import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import rootSaga from '../core/sagas';
import createStore from '../core/store';
import App from '../web/app';

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = (window as any).__INITIAL_STATE__;

// Create client store
const history = createBrowserHistory();
const store = createStore(history, preloadedState);

(store as any).rootTask = (store as any).runSaga(rootSaga);

const renderApp = () => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
  );
};

//
renderApp();


// Server side rendering
if ((module as any).hot) {
  //
  (module as any).hot.accept('../web/app', () => {
    // const newApp = require('../web/app').default;
    renderApp();
  });
  //
  (module as any).hot.accept('../core/sagas', () => {
    (store as any).closeSagas();
    (store as any).rootTask = (store as any).runSaga(
      require('../core/sagas').default
    );
  });
}
