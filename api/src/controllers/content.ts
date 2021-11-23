import * as express from 'express';
import { fetchContent } from '../service/contentful'
import { Controller } from './controller.type';

export default class ContentControllerImpl implements Controller {

    constructor(private app: express.Application) {
        this.initRoutes()
    }

    async initRoutes() {
        this.app.get('/:id', async (req, res) => {
            const payload = await fetchContent(req.params.id)
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(payload, undefined, 2))
        });        
    }
}