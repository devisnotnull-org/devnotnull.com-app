const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const WebpackBar = require('webpackbar');
const { ProvidePlugin } = require('webpack');

const paths = require('../paths');
const { common } = require('../common');

module.exports = merge(common, {
  target: 'node',
  entry: ['whatwg-fetch', './src/server/handler'],
  devtool: 'source-map',
  stats: {
    colors: true,
    reasons: true
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          { loader: 'isomorphic-style-loader' },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              modules: {
                mode: 'local',
                localIdentName: '[local][hash:base64:5]'
              }
            }
          },
          {
            loader: 'resolve-url-loader',
            options: {
              root: paths.src
            }
          }
        ]
      }
    ]
  },
  node: {
    __dirname: false,
    __filename: false
  },
  plugins: [
    new WebpackBar({ profile: true, name: 'serverless' }),
    new ProvidePlugin({})
  ]
});