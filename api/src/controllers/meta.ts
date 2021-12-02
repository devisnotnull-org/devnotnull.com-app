import * as express from 'express';
import { fetchContent } from '../service/contentful'
import { Controller } from './types';

export default class ContentControllerImpl implements Controller {

    constructor(private app: express.Application) {
        this.initRoutes()
    }

    async initRoutes() {
        this.app.get('/meta', async (req, res) => {
            const payload = await fetchContent("721DX3ujLmVAwmiguGLP8t")
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(payload, undefined, 2))
        });        
    }
}