import "../../typings/index.d.ts" 

import { dirname } from 'path';
import express, { Express, NextFunction, Request, Response } from 'express';
import { createMemoryHistory } from 'history';
import { config } from './config';
import { render } from './render';

const __dirname = (__filename) => dirname(__filename);

import createStore from '../core/store';

const PROD: boolean = process.env.NODE_ENV === 'production';
const app: Express = express();

// All other routes will be directed to React
app.get('*', async (req: Request, res: Response) => {
  const history = createMemoryHistory({ initialEntries: [req.path]});
  const store = await createStore(history);
  return render(req.url, config, res, store);
});

// Catch 404 and forward to error handler
app.use((req: Request, res: Response, next: NextFunction) => {
  const err = new Error('Not Found');
  (err as any).status = 404;
  next(err);
});

// Error handler
app.use((err: any, req: Request, res: Response) => {
  if (PROD) console.error('error : ', err.message);
  else console.error('error : ', err);
  res.status(err.status || 500);
});

// Server our app

export { app };
