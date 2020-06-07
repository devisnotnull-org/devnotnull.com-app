const WebpackBar = require('webpackbar');
const merge = require('webpack-merge');
const path = require('path');

const NodemonPlugin = require('nodemon-webpack-plugin'); 

const serverless = require('./serverless.common');

module.exports = merge(serverless, {
  devtool: false,
  mode: 'development',
  output: {
    libraryTarget: 'commonjs2',
    filename: '[name].js',
    sourceMapFilename: '[file].map',
  },
  plugins: [
    // new NodemonPlugin(),
    new WebpackBar({ profile: true, name: 'serverless' })
  ]
});