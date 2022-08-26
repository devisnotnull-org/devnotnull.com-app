import 'regenerator-runtime/runtime';
import 'source-map-support/register'

import { APIGatewayEvent, Context } from 'aws-lambda';
import { createServer, proxy } from 'aws-serverless-express';

import { app } from './http';

const server = createServer(app);

export const handler = (event: APIGatewayEvent, context: Context) =>
  proxy(server, event, context);
