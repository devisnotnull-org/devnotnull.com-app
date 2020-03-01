import express from 'express';
import * as React from 'react';
import path from 'path';
import { renderToString } from 'react-dom/server'
import createSagaMiddleware from 'redux-saga';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import AppRouter from '../web/containers/routes';
import reducer from '../core/reducers'

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
  res.send(html)
}

app.use(express.static(path.join(__dirname, '../build/static')));

app.get('/', (req: express.Request, res: express.Response) => {
    
  handleRender(req, res)
});

app.listen(port, () => console.log('Example app listening on port 3000!'));
