import TerserPlugin from 'terser-webpack-plugin';
import { merge } from 'webpack-merge';
import webpack from 'webpack';
import { WaitPlugin } from '../plugins/wait.js'

import { src, build } from '../paths.js'
import server from './server.common.js';

const asset = {
  "app.js": "/static/app.js",
  "client.css": "/static/client.css",
  "vendors.js": "/static/vendors.js"
}

export default merge(server('development'), {
  mode: 'development',
  devtool: 'source-map',
  optimization: {
    minimize: false,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          parse: {
            ecma: 8
          }
        }
      }),
    ]
  },
  devServer: {
    port: 9000,
    hot: true,
    compress: false,
    static: {
      directory: build
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'isomorphic-style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: {
                localIdentName: '[hash:base64:5]'
              }
            }
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'resolve-url-loader',
            options: {
              root: src
            }
          }
        ]
      }
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      BROWSER: false
    }),
    new WaitPlugin(`${build}/client-assets.json`),
    new webpack.DefinePlugin({
      __ASSETS__: JSON.stringify(asset)
    }),
  ],
})

