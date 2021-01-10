const WebpackBar = require('webpackbar');
const ManifestPlugin = require('webpack-manifest-plugin');
const { join } = require('path')
const merge = require('webpack-merge');
const webpack = require('webpack');

const paths = require('../paths');
const client = require('./client.common');

module.exports = merge(client, {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: [
      'babel-polyfill/dist/polyfill.js',
      'react-hot-loader/patch',
      'webpack-hot-middleware/client?noInfo=false'
    ]
  },
  output: {
    filename: 'static/js/[name].js',
    chunkFilename: 'static/js/[name].[contenthash].js'
  },
  devServer: {
    port: 9000,
    hot: true,
    compress: true,
    contentBase: paths.dist,
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              hmr: true
            }
          },
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
            loader: 'postcss-loader',
            options: {
              sourceMap: false,
              ident: 'postcss',
              plugins: () => [
                require('postcss-custom-media'),
                require('postcss-flexbugs-fixes'),
                require('postcss-preset-env')({
                  autoprefixer: {
                    flexbox: 'no-2009'
                  },
                  stage: 3
                })
              ]
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
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ManifestPlugin({
      fileName: 'asset-manifest.json'
    }),
    new WebpackBar({ profile: true, name: 'client', color: 'green' })
  ]
});
