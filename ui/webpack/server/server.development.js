
const WebpackBar = require('webpackbar');
const merge = require('webpack-merge');
const path = require('path');
const { DefinePlugin } = require('webpack');

const nodeExternals = require('webpack-node-externals');
const ManifestPlugin = require('webpack-manifest-plugin');

const paths = require('../paths');

const server = require('./server.common');

module.exports = merge(server, {
  devtool: false,
  mode: 'development',
  devtool: 'source-map',
  output: {
    libraryTarget: 'commonjs2',
    filename: 'server.js'
  },
  plugins: [
    new WebpackBar({ profile: true, name: 'server' }),
    new ManifestPlugin({
      fileName: 'asset-manifest-service.json'
    }),
    new DefinePlugin({
      __ASSETS__: JSON.stringify({})
    })
  ]
});