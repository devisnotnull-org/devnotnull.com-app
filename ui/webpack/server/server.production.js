
const TerserPlugin = require('terser-webpack-plugin');
const merge = require('webpack-merge');
const { DefinePlugin } = require('webpack');

// REQUIRE CLIENT BUILD BEFORE HAND
const asset = require('../../dist/asset-manifest.json');
const ManifestPlugin = require('webpack-manifest-plugin');

const server = require('./server.common');

module.exports = merge(server, {
  devtool: 'source-map',
  mode: 'production',
  target: 'node',
  output: {
    libraryTarget: 'commonjs2',
    filename: 'server.js'
  },
  plugins: [
    new DefinePlugin({
      __ASSETS__: JSON.stringify(asset)
    }),
    new ManifestPlugin({
      fileName: 'asset-manifest-server.json'
    })
  ]
});