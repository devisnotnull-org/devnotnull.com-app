import { APIGatewayEvent, Context } from 'aws-lambda';
import { createServer, proxy } from '@vendia/serverless-express';
import 'regenerator-runtime/runtime';
import 'source-map-support/register';

import { app } from './http';

const server = createServer(app);

export const handler = (event: APIGatewayEvent, context: Context) =>
  proxy(server, event, context);