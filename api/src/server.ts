import express from 'express';
import { initRoutes } from './controllers';
import cors from "cors"

const app = express();

const port: number = 3005;

app.use(cors({
    origin: '*'
}));

initRoutes(app);

app.listen(port, () => {
    console.info(`Example app listening on port yay ${port}`);
});