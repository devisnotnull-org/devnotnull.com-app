import 'regenerator-runtime/runtime';
import { createServer, Server } from 'http';
import express, { Express, Request, Response, NextFunction } from 'express';

import { join } from 'path';
 
// Server Side Rendering
import { renderPage, renderDevPage } from './ssr';

const PROD: boolean = process.env.NODE_ENV === 'production';

const app: Express = express();

// Hot module reloading
if (PROD) {
  console.log("STATIC PATH DEVVVVV")
  app.use('/static', express.static(join(__dirname, '/static')))
  app.get('*', renderPage);
} else {
  // Hot Module Reloading
  console.log("STATIC PATH SERVERrr")
  // const HMR = require('./hmr').default;
  // HMR(app);
  app.use('/static', express.static(join(__dirname, '/static')))
  app.get('*', renderDevPage);
}

// catch 404 and forward to error handler
app.use((req: Request, res: Response, next) => {
  const err = new Error('Not Found');
  (err as any).status = 404;
  next(err);
});

// error handler
app.use((err: any, req: Request, res: Response) => {
  if (PROD) console.error('error : ', err.message);
  else console.error('error : ', err);
  res.status(err.status || 500);
});

const server: Server = createServer(app);

server.listen(3000, () => {
  const address = server.address();
  console.log(`${'>>>'} ${'Listening on:'} ${'localhost::'}${`${address.toString()}`}`);
});