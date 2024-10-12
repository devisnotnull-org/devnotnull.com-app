const enviroment = process.env.NODE_ENV || 'development';

const { config } = require(`./client.${enviroment}`);

export { config };
