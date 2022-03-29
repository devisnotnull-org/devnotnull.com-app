import merge from 'webpack-merge';
import TerserPlugin from 'terser-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { EnvironmentPlugin } from 'webpack';
import { WebpackManifestPlugin } from 'webpack-manifest-plugin';

import CopyPlugin from 'copy-webpack-plugin'
import { config as client } from './client.common';
import { build, src, media, buildMedia } from '../paths'
import { postcssPlugin } from 'postcss-url'
import { config as globalConfig } from '../config'
import AssetsPlugin from 'assets-webpack-plugin';


const options = [
  // using custom function to build url
  { filter: 'cdn/**/*', url: (asset) => `https://cdn.url/${asset.url}` }
];

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
                localIdentName: '[name]__[local]__[hash:base64:5]'
              }
            }
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
      fileName: 'asset-manifest.json'
    }),
  ],
});

export { config }
