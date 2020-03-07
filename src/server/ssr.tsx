/* eslint global-require: 0 */

import { Store } from 'redux';

// Libraries
import React from 'react';
import { renderToString } from 'react-dom/server';
import createHistory from 'history/createMemoryHistory';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';

import { existsSync, readFileSync } from 'fs';

//
import App from '../web/app'

// Components
import Html from '../web/common/html/html';

// Redux
import createStore from '../core/store';
import rootSaga from '../core/sagas';

let manifest: any;
// This is only processed when there is a page request 
try {
    if(existsSync(`${__dirname}/asset-manifest.json`)) {
        const re = readFileSync(`${__dirname}/asset-manifest.json`).toString();
        manifest = JSON.parse(re);
    } else {
        console.log('The file does not exist.');
    }
} catch (err) {
    console.error(err);
}

/**
 * 
 * @param url 
 * @param store 
 * @param assets 
 * @param res 
 */
const renderApp = (url: string, store: Store, res?: any) => {

    // 
    const PROD = process.env.NODE_ENV === 'production';
    const context = {
        splitPoints: []
    };

    // 
    const rootComponent = PROD
    ? (<Provider store={store}>
        <StaticRouter location={url}>
            <App />
        </StaticRouter>
    </Provider>)
    : null;

    // Fetch all resources for root saga
    (store as any).runSaga(rootSaga).toPromise().then(() => {
        // Get state from store after sagas were run and strigify it for rendering in HTML
        const state = store.getState();
        const initialState = `window.__INITIAL_STATE__ = ${JSON.stringify(state)}`;
        const splitPoints = `window.__SPLIT_POINTS__ = ${JSON.stringify(context.splitPoints)}`;

        const html = renderToString(
            <Html
                PROD={PROD}
                assets={manifest}
                rootComponent={rootComponent}
                initialState={initialState}
                splitPoints={splitPoints}
            />
        );
        res.send(`${html}`);
    });

    // Do first render, trigger sagas for component to run
    if (PROD) renderToString(rootComponent);

    // Dispatch a close event so sagas stop listening after they're resolved
    (store as any).closeSagas();
}

/**
 * 
 * @param req 
 * @param res 
 */
export const renderPage = (req: any, res: any) => {
    const history = createHistory();
    const store = createStore(history);
    const assets = {};
    renderApp(req.url, store, res);
};

/**
 * 
 * @param req 
 * @param res 
 */
export const renderDevPage = (req: any, res: any) => {
    const history = createHistory();
    const store = createStore(history);
    renderApp(req.url, store, res);
};

export default renderPage;