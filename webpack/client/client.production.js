import merge from 'webpack-merge';
import TerserPlugin from 'terser-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { EnvironmentPlugin } from 'webpack';
import { WebpackManifestPlugin } from 'webpack-manifest-plugin';

import CopyPlugin from 'copy-webpack-plugin'
import { config as client } from './client.common';
import { build, src, media, buildMedia } from '../paths'
import AssetsPlugin from 'assets-webpack-plugin';

const config = merge(client('production'), {
  devtool: 'source-map',
  target: 'web',
  entry: {
    app: [`${src}/client/index`],
  }, 
  output: {
    filename: 'static/[name].[chunkhash].js',
    path: `${build}`,
  },
  devServer: {
    port: 9000,
    compress: true,
    contentBase: build,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    }
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          sourceMap: true,
          parse: {
            ecma: 8
          }
        }
      }),
    ],
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
            },
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              postcssOptions: {
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
            }
          }
        ]
      }
    ],
  },
  plugins: [
    new EnvironmentPlugin({
      NODE_ENV: 'production',
      BROWSER: false,
    }),
    new MiniCssExtractPlugin({
      filename: 'static/client.[contenthash].css',
    }),
    new CopyPlugin({
      patterns: [
        { from: media, to: buildMedia },
      ],
    }),
    new AssetsPlugin({
      path: build,
      filename: `client-assets.json`,
      prettyPrint: true,
    }),
    new WebpackManifestPlugin({
      fileName: 'client-asset-manifest.json'
    }),
  ],
});

export { config }
