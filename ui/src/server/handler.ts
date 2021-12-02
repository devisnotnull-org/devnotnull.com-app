import { APIGatewayEvent, Context } from 'aws-lambda';
import { createServer, proxy } from 'aws-serverless-express';
import 'regenerator-runtime/runtime';

import { app } from './http';

require('source-map-support').install();

const server = createServer(app);

export const handler = (event: APIGatewayEvent, context: Context) =>
  proxy(server, event, context);
