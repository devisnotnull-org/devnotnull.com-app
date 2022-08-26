//import 'source-map-support/register'

import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { ReduxRouter } from '@lagunovsky/redux-react-router'

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
  const rootElement = document.getElementById('root')
  if(rootElement){
    /**
    hydrateRoot(rootElement,  <Provider store={store}>
      <ReduxRouter
        history={history}
        children={<App/>}
      />
    </Provider>)
    */
   
    const root = createRoot(rootElement)
    root.render(
      <Provider store={store}>
        <ReduxRouter
          history={history}
          children={<App/>}
        />
      </Provider>
    );
  
  }
};

//
renderApp();

// Server side rendering
if ((module as any).hot) {
  //
  (module as any).hot.accept('../web/app', () => {
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
