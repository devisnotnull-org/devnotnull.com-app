const merge = require('webpack-merge');
const { DefinePlugin } = require('webpack');

const WebpackBar = require('webpackbar');

const { common } = require('../common');

const vendor = ['react', 'react-dom', 'react-router', 'react-redux', 'redux'];

module.exports = merge(common, {
  target: 'web',
  entry: {
    app: ['./src/client/index'],
    vendor
  },
  plugins: [
    new DefinePlugin({
      'process.env.BROWSER': true
    }),
    new WebpackBar({ profile: true, name: 'client' })
  ]
});
