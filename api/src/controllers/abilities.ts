import * as express from 'express';
import { fetchContent } from '../service/contentful'
import { Controller } from './types';

export default class AbilitiesControllerImpl implements Controller {

    constructor(private app: express.Application) {
        this.initRoutes()
    }

    async initRoutes() {
        this.app.get('/abilities', async (req, res) => {
            const payload = await fetchContent("", [{ key: "content_type", value: "abilities"}, { key: "select", value: "fields"}, { "key": "order", "value": "-fields.level"}])
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(payload, undefined, 2))
        });        
    }
}