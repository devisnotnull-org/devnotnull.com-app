import { merge } from 'webpack-merge';
import { WebpackManifestPlugin } from 'webpack-manifest-plugin';
import webpack from 'webpack'
import AssetsPlugin from 'assets-webpack-plugin';

import { build, src } from '../paths.js'
import client from './client.common.js';

export default merge(client('development'), {
  devtool: "inline-source-map",
  entry: {
    app: [
      'webpack/hot/dev-server',
      "core-js/stable",
      "regenerator-runtime/runtime",
      `${src}/client/index`,
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
  output: {
    filename: 'static/js/[name].js',
    chunkFilename: 'static/js/[name].[contenthash].js'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: {
                localIdentName: '[local][hash:base64:5]'
              }
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: false,
              postcssOptions: {
                plugins: () => [
                  import('postcss-custom-media'),
                  import('postcss-flexbugs-fixes'),
                  import('postcss-preset-env')({
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
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new AssetsPlugin({
      path: build,
      filename: `client-assets.json`,
      prettyPrint: true,
    }),
    new WebpackManifestPlugin({
      fileName: 'asset-manifest.json'
    }),
  ]
});
