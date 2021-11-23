import * as express from 'express';
import ContentController from './content';

const controllers = [
    ContentController
];

/**
 * Bootstrap all the routes by initializing all the controllers.
 * 
 * @param app Express application
 */
export function initRoutes(app: express.Application) {
    for(let controller of controllers) {
        new controller(app);
    }
}