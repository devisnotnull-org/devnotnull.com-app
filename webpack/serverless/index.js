import { aquireTarget } from '../util.js';

const enviroment = process.env.NODE_ENV || 'development';

const config  = await aquireTarget(`./serverless/serverless.${enviroment}.js`);

export default config.default;
