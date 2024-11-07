import 'source-map-support/register';

import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  matchRoutes,
  RouterProvider,
} from 'react-router-dom';

import reportWebVitals from '../webVitals';

import { routes } from '../routes';

// Grab the state from a global variable injected into the server-generated HTML

(async () => {
  // Create client store
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

    if (rootElement) {
      const root = createRoot(rootElement);
      root.render(<RouterProvider router={router} fallbackElement={null} />);
    }
  };

  //
  renderApp();

  reportWebVitals();
})().catch((ex) => console.log(ex));
