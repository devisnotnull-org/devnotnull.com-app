const enviroment = process.env.NODE_ENV || 'development';

import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const target = process.env.TARGET || 'all';

const __dirname = dirname(fileURLToPath(import.meta.url));

const aquireTarget = async (inTarget) => {
  const module = await import(resolve(__dirname, 'webpack', inTarget, `index.mjs`));
  return module;
};

const { config } = await aquireTarget(`./client/client.${enviroment}`);

console.log(config)

export { config };
