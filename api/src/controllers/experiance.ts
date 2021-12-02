import * as express from 'express';
import { fetchContent } from '../service/contentful'
import { Controller } from './types';

export default class ExperianceControllerImpl implements Controller {

    constructor(private app: express.Application) {
        this.initRoutes()
    }

    async initRoutes() {
        this.app.get('/experiance', async (req, res) => {
            const payload = await fetchContent("", [{ key: "content_type", value: "experienceItem" }, { key: "select", value: "fields" }, { key: "order", value: "-fields.startDate" }])
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(payload, undefined, 2))
        });        
    }
}