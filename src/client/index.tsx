//import 'source-map-support/register'

import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { ReduxRouter } from '@lagunovsky/redux-react-router'
import * as Sentry from "@sentry/react";
import { AnimatePresence } from "framer-motion";
import {
  createBrowserRouter,
  matchRoutes,
  RouterProvider,
} from "react-router-dom";

import { BrowserTracing } from "@sentry/tracing";

import reportWebVitals from '../web/webVitals';
import rootSaga from '../core/sagas';
import createStore from '../core/store';
import App from '../web/app';

import { routes } from "../web/routes";

Sentry.init({
  dsn: "https://12046da78cfc4847b6f1ae989a727d1c@o1429445.ingest.sentry.io/4503887995076608",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = (window as any).__INITIAL_STATE__;

(async () => {
  // Create client store
  const history = createBrowserHistory();
  const store = await createStore(history, preloadedState);

  (store as any).rootTask = (store as any).runSaga(rootSaga);

  const renderApp = async () => {
    const rootElement = document.getElementById('root');

    // Determine if any of the initial routes are lazy
    const lazyMatches = matchRoutes(routes, window.location)?.filter(
      (m) => m.route.lazy
    );

    // Load the lazy matches and update the routes before creating your router
    // so we can hydrate the SSR-rendered content synchronously
    if (lazyMatches && lazyMatches?.length > 0) {
      await Promise.all(
        lazyMatches.map(async (m) => {
          const routeModule = await m.route.lazy!();
          Object.assign(m.route, { ...routeModule, lazy: undefined });
        })
      );
    }

    const router = createBrowserRouter(routes);
    
    if(rootElement){
      const root = createRoot(rootElement)
      root.render(
        <Provider store={store}>
          <AnimatePresence mode="wait">

          <RouterProvider router={router} fallbackElement={null} />
          </AnimatePresence>
          <ReduxRouter
            history={history}
            children={<App/>}
          />
        </Provider>
      );
    
    }
  }

  //
  renderApp();
  
  reportWebVitals();

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
        // eslint-disable-next-line
        require('../core/sagas').default
      );
    });
  }

  
})().catch(ex => console.log(ex))


