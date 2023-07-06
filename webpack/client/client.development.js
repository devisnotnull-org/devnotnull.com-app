import merge from 'webpack-merge';
import { WebpackManifestPlugin } from 'webpack-manifest-plugin';
import { HotModuleReplacementPlugin } from 'webpack'
import AssetsPlugin from 'assets-webpack-plugin';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer'


import { build, src } from '../paths'
import { config as client } from './client.common';

const config = merge(client('development'), {
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
    contentBase: build,
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
          },
        ]
      }
    ]
  },
  plugins: [
    new HotModuleReplacementPlugin(),
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

export { config }
