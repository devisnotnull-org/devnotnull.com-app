import React from "react";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import { Response } from "express";
import { StaticRouter } from "react-router";
import { Store } from "redux";
import rootSaga from "../core/sagas";
import App from "@web/app";
import Html from "./html";

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
  res: Response,
  store: Store
  ): string => {
  const response = "";
  const BUILD_PROD = process.env.NODE_ENV === "production";
  const RUNTIME_PROD =  process.env.NODE_RUNTIME_ENV === "production";

  const context = {
    splitPoints: [],
  };
  const rootComponent = BUILD_PROD ? (
    <Provider store={store}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
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
        config,
      })}`;
      const splitPoints = `window.__SPLIT_POINTS__ = ${JSON.stringify(
        context.splitPoints
      )}`;
      const html = renderToString(
        <Html
          config={config}
          buildProd={BUILD_PROD}
          runtimeProd={RUNTIME_PROD}
          rootComponent={rootComponent}
          initialState={initialState}
          splitPoints={splitPoints}
        />
      );
      res.send(html);
    });
  // Dispatch a close event so sagas stop listening after they're resolved
  (store as any).closeSagas();
  return response;
};
