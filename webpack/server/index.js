const merge = require('webpack-merge');

const enviroment = process.env.NODE_ENV || 'development';

const serverConfig = require(`./server.${enviroment}`);

module.exports = serverConfig
