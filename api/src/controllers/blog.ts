import * as express from 'express';
import { fetchContent } from '../service/contentful'
import { Controller } from './types';

export default class ContentControllerImpl implements Controller {

    constructor(private app: express.Application) {
        this.initRoutes()
    }

    async initRoutes() {
        this.app.get('/blog', async (req, res) => {
            const payload = await fetchContent("", [{ key: "content_type", value: "blogItem"}, { key: "select", value: "fields"}])
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(payload, undefined, 2))
        });        
    }
}