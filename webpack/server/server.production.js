import TerserPlugin from 'terser-webpack-plugin';
import merge from 'webpack-merge';
import webpack from 'webpack';
import { WebpackManifestPlugin } from 'webpack-manifest-plugin';
import AssetsPlugin from 'assets-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { config as server } from './server.common.js';
import { build, src } from '../paths.js';

const asset = await import('../../build/asset-manifest.json');

const config = merge(server('production'), {
  devtool: 'source-map',
  mode: 'production',
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
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
            },
          },
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
    new AssetsPlugin({
      path: build,
      filename: `server-assets.json`,
      prettyPrint: true,
      update: true
    }),
    new WebpackManifestPlugin({
      fileName: 'server-manifest-server.json'
    }),
    new MiniCssExtractPlugin({
      filename: 'server.[contenthash].css',
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
      BROWSER: false
    }),
    new webpack.DefinePlugin({
      __ASSETS__: JSON.stringify(asset)
    }),
  ]
})

export { config } 
