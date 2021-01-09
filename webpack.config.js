const { resolve } = require('path');

const target = process.env.TARGET || 'serverless';
const enviroment = process.env.NODE_ENV || 'development';

const config = require(resolve(
  __dirname,
  'webpack',
  target,
  `${target}.${enviroment}.js`
));

module.exports = config;