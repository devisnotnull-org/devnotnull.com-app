import merge from 'webpack-merge';
import WebpackBar from 'webpackbar';
import { ProvidePlugin } from 'webpack';

import { src } from '../paths';
import { common } from '../common';

const config = merge(common, {
  target: 'node',
  entry: ['whatwg-fetch', `${src}/server/server.ts`],
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
              root: src
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
    new WebpackBar({ profile: true, name: 'server' }),
    new ProvidePlugin({})
  ]
});

export { config }
