import { APIGatewayEvent, Context } from 'aws-lambda';
import { createServer, proxy } from 'aws-serverless-express';
import 'regenerator-runtime/runtime';
import { install } from 'source-map-support';

import { app } from './http';

install();

const server = createServer(app);

export const handler = (event: APIGatewayEvent, context: Context) =>
  proxy(server, event, context);
