/* eslint global-require: 0 */

import { Store } from 'redux';

// Libraries
import React from 'react';
import { renderToString } from 'react-dom/server';
import createHistory from 'history/createMemoryHistory';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import { Request } from 'express';

import { existsSync, readFileSync } from 'fs';

//
import App from '../web/app'

// Components
import Html from '../web/common/html/html';

// Redux
import createStore from '../core/store';
import rootSaga from '../core/sagas';
import { resolve } from 'url';
import { reject } from 'ramda';

let manifest: any = {};

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
const renderApp = (url: string, store: Store): string => {

    let response: string = "";
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
        response = html;
    });

    // Do first render, trigger sagas for component to run
    if (PROD) response = renderToString(rootComponent);

    // Dispatch a close event so sagas stop listening after they're resolved
    (store as any).closeSagas();
    
    //
    return response;
}

/**
 * 
 * @param url 
 * @param store 
 * @param assets 
 * @param res 
 */
const renderServerlessApp = async (url: string, store: Store, callback)=> {

    // 
    const PROD = process.env.NODE_ENV === 'production';
    const context = {
        splitPoints: []
    };

    // 
    const rootComponent = 
        <Provider store={store}>
            <StaticRouter location={url}>
                <App />
            </StaticRouter>
        </Provider>
    
    console.log(rootComponent);

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
        
        // console.log(html);

        //
        const response = {
            statusCode: 200,
            headers: {
              'Content-Type': 'text/html',
            },
            body: html,
        };
        
        callback(
            null,
            response
        );

        // Dispatch a close event so sagas stop listening after they're resolved
    });

    (store as any).closeSagas();
}


/**
 * 
 * @param req 
 * @param res 
 */
export const renderPageServerless = async (req: string, callback) => {
    const history = createHistory();
    const store = createStore(history);
    renderServerlessApp(req, store, callback);
};

/**
 * 
 * @param req 
 * @param res 
 */
export const renderPageExpress = (req: Request): string => {
    const history = createHistory();
    const store = createStore(history);
    return renderApp(req.url, store);
};

/**
 * 
 * @param req 
 * @param res 
 */
export const renderDevPageExpress = (req: Request): string => {
    const history = createHistory();
    const store = createStore(history);
    return renderApp(req.url, store);
};
