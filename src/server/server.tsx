import 'regenerator-runtime/runtime';
import http from 'http';
import express from 'express';

// Server Side Rendering
import { renderPage, renderDevPage } from './ssr';

const PROD = process.env.NODE_ENV === 'production';

const app = express();

if (PROD) {
  app.use('/static', express.static('build'));
  app.get('*', renderPage);
} else {
  // Hot Module Reloading
  const HMR = require('./hmr').default;
  HMR(app);
  app.get('*', renderDevPage);
}

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  (err as any).status = 404;
  next(err);
});

// error handler
app.use((err: any, req: any, res: any) => {
  if (PROD) {
    console.error('error : ', err.message);
  } else {
    console.error('error : ', err);
  }
  res.status(err.status || 500);
});

const server = http.createServer(app);

server.listen(8080, () => {
  const address = server.address();
  console.log(`${'>>>'} ${'Listening on:'} ${'localhost::'}${`${address}`}`);
});