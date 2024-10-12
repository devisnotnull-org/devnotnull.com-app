import TerserPlugin from 'terser-webpack-plugin';
import merge from 'webpack-merge';
import { EnvironmentPlugin, DefinePlugin } from 'webpack';
import { WebpackManifestPlugin } from 'webpack-manifest-plugin';
import AssetsPlugin from 'assets-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";

import { config as server } from './server.common';
import { build, src } from '../paths';

const asset = require('../../build/client-asset-manifest.json');

const config = merge(server('production'), {
  devtool: 'source-map',
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          parse: {
            ecma: 8
          }
        }
      }),
      new CssMinimizerPlugin(),
    ]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'isomorphic-style-loader',
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
            }
          },
          {
            loader: 'postcss-loader',
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
    new EnvironmentPlugin({
      NODE_ENV: 'production',
      BROWSER: false
    }),
    new DefinePlugin({
      __ASSETS__: JSON.stringify(asset)
    }),
  ]
})

export { config } 
