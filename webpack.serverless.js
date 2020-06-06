const { resolve } = require('path');

const enviroment = process.env.NODE_ENV || 'development';

module.exports = require(resolve(__dirname, 'webpack', `serverless.${enviroment}`));
