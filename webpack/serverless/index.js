const enviroment = process.env.NODE_ENV || 'development';

const { config } = require(`./serverless.${enviroment}`);

export { config }
