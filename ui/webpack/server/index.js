const enviroment = process.env.NODE_ENV || 'development';

const { config } = require(`./server.${enviroment}`);

export { config }
