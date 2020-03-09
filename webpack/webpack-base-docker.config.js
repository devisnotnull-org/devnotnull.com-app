const R = require('ramda');
const path = require('path');
const merge = require('webpack-merge');
const serverConfig = require('./webpack-server.config');
const clientConfig = require('./webpack-client.config');

const env = process.env.NODE_ENV || 'development';
const brand = process.env.BRANDNAME || 'photobox';

const isDev = env === 'development';
const commit = process.env.GIT_COMMIT || false;

const hash = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

module.exports = args => {
  return R.flatten([ clientConfig('production', hash), serverConfig('production', hash) ]);
};
