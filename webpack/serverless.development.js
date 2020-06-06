const WebpackBar = require('webpackbar');
const merge = require('webpack-merge');

const NodemonPlugin = require('nodemon-webpack-plugin'); 

const server = require('./server.common');

module.exports = merge(server, {
  devtool: false,
  output: {
    filename: '[name].js'
  },
  plugins: [
    new NodemonPlugin(),
    new WebpackBar({ profile: true, name: 'server' })
  ]
});