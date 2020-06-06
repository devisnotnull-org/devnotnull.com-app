import 'regenerator-runtime/runtime';

import { APIGatewayEvent } from 'aws-lambda';

import { renderPage } from './render';

export const handler = async (event: APIGatewayEvent, context: any) => {
    return await renderPage(event.path)
};
