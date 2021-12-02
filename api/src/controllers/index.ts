import * as express from 'express';
import MetaController from './meta';
import AbillityController from './abilities';
import BlogController from './blog';
import EducationController from './education';
import PortfolioController from './portfolio';
import ExperianceController from './experiance';

const controllers = [
    MetaController,
    BlogController,
    AbillityController,
    EducationController,
    PortfolioController,
    ExperianceController
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