import 'regenerator-runtime/runtime';

import { APIGatewayEvent, Callback } from 'aws-lambda';

import { renderPage } from './render';

export const handler = async (event: APIGatewayEvent, context: any, callback: Callback) => {
    const html = await renderPage(event.path)
    const response = {
        statusCode: 200,
        headers: {
          'Content-Type': 'text/html',
        },
        body: html,
    };
    callback(null, response);
};
