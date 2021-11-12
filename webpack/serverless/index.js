const merge = require('webpack-merge');

const enviroment = process.env.NODE_ENV || 'development';

const serverConfig = require(`./serverless.${enviroment}`);

module.exports = serverConfig
