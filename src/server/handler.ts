import 'regenerator-runtime/runtime';

import { Callback, APIGatewayEvent } from 'aws-lambda';

import { renderPageServerless } from './ssr';

export const handler = (event: APIGatewayEvent, context: any, callback: Callback) => {
    renderPageServerless(event.path, callback)
};
