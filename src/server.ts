import express from 'express';

import path from 'path';
import fs from 'fs';
import { load } from 'cheerio';

const port = 3000;

const app = express();

app.use(express.static(path.join(__dirname, '../build/static')));

app.get('/', (req: express.Request, res: express.Response) => {
  const finalPath = path.join(__dirname, '../build/index.html');
  const openHtml = fs.readFileSync(finalPath);
  const loadItem = load(openHtml.toString());
  console.log('-------------------------------------');
  console.log('-------------------------------------');
  console.log('-------------------------------------');
  console.log(openHtml.toString());
  res.end(openHtml.toString());
});

app.listen(port, () => console.log('Example app listening on port 3000!'));
