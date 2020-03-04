import express from 'express';
import * as React from 'react';
import path from 'path';
import { renderToString } from 'react-dom/server'
import createSagaMiddleware from 'redux-saga';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { readFileSync, existsSync } from 'fs';
import { createStore, applyMiddleware } from 'redux';
import ReactDOMServer from 'react-dom/server'

import AppRouter from '../web/App';
import reducer from '../core/reducers'

const port = 3000;

const app = express();

console.log('process, ', process.cwd());

const template = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="shortcut icon" href="/favicon.ico" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <meta name="theme-color" content="#000000" />
    <link rel="manifest" href="/manifest.json" />
    <title>Fandanzle.co.uk</title>
    {SCRIPTS}
    {STYLE}
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
`;
const scriptImports: string[] = []
const styleImports: string[] = []

const assets: {[key: string]: string } = JSON.parse(readFileSync(path.resolve( __dirname, "./asset-manifest.json")).toString());

const js = Object.keys(assets).filter(item => item.includes('.js'));
const css = Object.keys(assets).filter(item => item.includes('.css'));

for(const jsImport of js) {
  scriptImports.push(`<script src="/static${assets[jsImport]}"></script>`)
}

for(const cssImport of css) {
  styleImports.push(`<link rel="stylesheet" href="/static${assets[cssImport]}"/>`)
}

const finalScriptImports = scriptImports.join('');
const finalStyleImports = styleImports.join('');

let final = template.replace('{SCRIPTS}', finalScriptImports)
final = final.replace('{STYLE}', finalStyleImports)

console.log('js,' , scriptImports)
console.log('css,' , styleImports)

console.log(final)

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

  // Send the rendered page back to the client
  console.log(final)

  final = final.replace(
    '<div id="root"></div>',
    `<div id="root">${html}</div>`
  );

  res.send(final)
}

console.log(path.join(__dirname))

app.use('/static', express.static(path.join(__dirname)))

app.get('/', (req: express.Request, res: express.Response) => {
    
  handleRender(req, res)
});

app.listen(port, () => console.log('Example app listening on port 3000!'));
