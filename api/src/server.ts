import express from 'express';
import { initRoutes } from './controllers/index';

const app = express();

const port: number = 3005;

initRoutes(app);

app.listen(port, () => {
    console.info(`Example app listening on port ${port}`);
});