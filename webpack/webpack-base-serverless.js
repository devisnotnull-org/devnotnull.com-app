const R = require('ramda');
const webpack = require('webpack');

const serverConfig = require('./webpack-serverless.config');
const clientConfig = require('./webpack-client.config');

module.exports = R.flatten([ clientConfig('production', hash), serverConfig ]);
