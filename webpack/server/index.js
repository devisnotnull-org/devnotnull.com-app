const enviroment = process.env.NODE_ENV || 'development';

module.exports = require(`./server.${enviroment}`);
