import express from 'express';
import * as React from 'react';
import path from 'path';
import fs from 'fs';
import { load } from 'cheerio';

import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from '../containers/routes';
import { createStore, applyMiddleware } from 'redux';
import { renderToString } from 'react-dom/server'


import { StaticRouter } from 'react-router-dom';

import reducer from '../common/reducer'
import createSagaMiddleware from 'redux-saga';
import { HomeView } from '../containers/home/home';

const port = 3000;

const app = express();

function handleRender(req: any, res: any) {

  //
  const sagaMiddleware = createSagaMiddleware()

  // Create a new Redux store instance
  const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
  )

  const finalPath = path.join(__dirname, '../../public/index.html');
  const openHtml = fs.readFileSync(finalPath);
  const loadItem = load(openHtml.toString());

  // Render the component to a string
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter>
        <AppRouter />
      </StaticRouter>
    </Provider>
  )

  // Grab the initial state from our Redux store
  const preloadedState = store.getState()

  // Send the rendered page back to the client
  res.send(preloadedState)

}

app.use(express.static(path.join(__dirname, '../build/static')));

app.get('/', (req: express.Request, res: express.Response) => {
    
  handleRender(req, res)

});

app.listen(port, () => console.log('Example app listening on port 3000!'));
