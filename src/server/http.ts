import "../../typings/index.d.ts" 

import * as Sentry from "@sentry/node";

import express, { Express, NextFunction, Request, Response } from 'express';
import { createMemoryHistory } from 'history';
import { config } from './config';
import { render } from './render';

import createStore from '../core/store';
import { readFile } from "fs/promises";

const PROD: boolean = process.env.NODE_ENV === 'production';
const app: Express = express();

Sentry.init({
  dsn: "https://f6f58928b5dc4e0589f15f3d98508535@o1429445.ingest.sentry.io/4505315002679296",
  integrations: [
    // enable HTTP calls tracing
    new Sentry.Integrations.Http({ tracing: true }),
    // enable Express.js middleware tracing
    new Sentry.Integrations.Express({ app }),
    // Automatically instrument Node.js libraries and frameworks
    ...Sentry.autoDiscoverNodePerformanceMonitoringIntegrations(),
  ],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

// RequestHandler creates a separate execution context, so that all
// transactions/spans/breadcrumbs are isolated across requests
app.use(Sentry.Handlers.requestHandler());
// TracingHandler creates a trace for every incoming request
app.use(Sentry.Handlers.tracingHandler());

app.use('/static', express.static('static'));
app.use('/static', express.static(__dirname + '/static'));

app.use(express.static('static'));
app.use(express.static(__dirname + '/static'));

// All other routes will be directed to React
app.get('*', async (req: Request, res: Response) => {
  const history = createMemoryHistory({ initialEntries: [req.path]});
  // Load production css if present
  // Gross but does the job for now
  const assets = __ASSETS__ ?? {};
  const keys = Object.keys(assets)
  const css = keys.filter(a => a.includes('.css') && !a.includes('.map'));
  const cssPayload = css.map((key) => assets[key]);
  const cssHydrate = cssPayload.map(async (pred) => (await readFile(`${__dirname}${pred}`)).toString())
  const cssHydrated = await Promise.all(cssHydrate);

  // Sagas are now old but I like them
  const store = await createStore(history);

  // Just inline the CSS for better page perf
  return render(req.url, config, res, store, cssHydrated);
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

// The error handler must be before any other error middleware and after all controllers
app.use(Sentry.Handlers.errorHandler());

// Server our app

export { app };
