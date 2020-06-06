import { Store } from 'redux';

import React from 'react';
import { renderToString } from 'react-dom/server';
import createHistory from 'history/createMemoryHistory';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import { existsSync, readFileSync } from 'fs';

import Html from './html';
import createStore from '../core/store';
import rootSaga from '../core/sagas';
import App from '../web/app';

let manifest: any = {};

try {
    if (existsSync(`${__dirname}/asset-manifest.json`)) {
        const re = readFileSync(`${__dirname}/asset-manifest.json`).toString();
        console.log(re)
        manifest = JSON.parse(re);
    } else {
        console.error('The file does not exist.');
    }
} catch (err) {
    console.error(err);
}

const renderAndWrap = (store: Store) => {
    return new Promise((res, rej) => {
        const rootSagaRun = (store as any).runSaga(rootSaga).toPromise();
        rootSagaRun.then(() => res()).catch(() => rej());
        (store as any).closeSagas();
    })
}

/**
 * 
 * @param url 
 * @param store 
 * @param assets 
 * @param res 
 */
const renderApp = async (url: string, store: Store): Promise<string> => {
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
    await renderAndWrap(store)

    // Get state from store after sagas were run and strigify it for rendering in HTML
    const state = store.getState();
    const initialState = `window.__INITIAL_STATE__ = ${JSON.stringify(state)}`;
    const splitPoints = `window.__SPLIT_POINTS__ = ${JSON.stringify(context.splitPoints)}`;

    // Do first render, trigger sagas for component to run
    if (!PROD) return renderToString(rootComponent);
    else return renderToString(
        <Html
            PROD={PROD}
            assets={manifest}
            rootComponent={rootComponent}
            initialState={initialState}
            splitPoints={splitPoints}
        />
    );
};

/**
 * 
 * @param req 
 * @param res 
 */
export const renderPage = async (url: string): Promise<string> => {
    const history = createHistory();
    const store = createStore(history);
    return await renderApp(url, store);
};
