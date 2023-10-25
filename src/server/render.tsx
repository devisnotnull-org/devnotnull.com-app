import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { Provider } from 'react-redux';
import { Router } from "@remix-run/router";
import { Response } from 'express';
import { StaticRouterProvider } from "react-router-dom/server";
import { Store } from 'redux';
import rootSaga from '../core/sagas';
import Html from '../web/components/html/html';

/**
 *
 * @param url
 * @param store
 * @param assets
 * @param res
 */
export const render = (
  url: string,
  config: any,
  router: Router,
  context: any,
  res: Response,
  store: Store,
  css?: string[]
): string => {
  const response = '';
  const BUILD_PROD = process.env.NODE_ENV === 'production';
  const RUNTIME_PROD = process.env.NODE_RUNTIME_ENV === 'production';

  const rootComponent = BUILD_PROD ? (
    <Provider store={store}>
      <StaticRouterProvider
        router={router}
        context={context}
        nonce="the-nonce"
      />
    </Provider>
  ) : null;

  (store as any)
    .runSaga(rootSaga, config)
    .toPromise()
    .then(() => {
      // Get state from store after sagas were run and strigify it for rendering in HTML
      const state = store.getState();
      const initialState = `window.__INITIAL_STATE__ = ${JSON.stringify({
        ...state,
        config
      })}`;
      let didError = false;
      const stream = renderToPipeableStream(
        <Html
          config={config}
          buildProd={BUILD_PROD}
          runtimeProd={RUNTIME_PROD}
          rootComponent={rootComponent}
          initialState={initialState}
          css={css}
        />,
    {
      onShellReady() {
        // The content above all Suspense boundaries is ready.
        // If something errored before we started streaming, we set the error code appropriately.
        res.statusCode = didError ? 500 : 200;
        res.setHeader('Content-type', 'text/html');
        stream.pipe(res);
      },
      onShellError(error) {
        // Something errored before we could complete the shell so we emit an alternative shell.
        res.statusCode = 500;
        res.send(
          '<!doctype html><p>Loading...</p><script src="clientrender.js"></script>'
        );
      },
      onAllReady() {
        // If you don't want streaming, use this instead of onShellReady.
        // This will fire after the entire page content is ready.
        // You can use this for crawlers or static generation.

        // res.statusCode = didError ? 500 : 200;
        // res.setHeader('Content-type', 'text/html');
        // stream.pipe(res);
      },
      onError(err) {
        didError = true;
        console.error(err);
      },
    }
  );
    });
  // Dispatch a close event so sagas stop listening after they're resolved
  (store as any).closeSagas();
  return response;
};
