

const path = require('path');
const webpack = require('webpack');
const PnpWebpackPlugin = require('pnp-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const ManifestPlugin = require('webpack-manifest-plugin');

const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');
const ModuleNotFoundPlugin = require('react-dev-utils/ModuleNotFoundPlugin');

const CopyPlugin = require('copy-webpack-plugin');

//
const paths = require('./paths');
const getClientEnvironment = require('./env');

const clientInclude = [paths.serverIndexJs, paths.appEntryPoint];

export default {
  devtool: 'eval',
  context: paths.appSrc,
  entry: {
    app: [
      'react-hot-loader/patch',
      'webpack-hot-middleware/client?noInfo=false',
      './client/index.jsx',
    ],
  },
  output: {
    filename: 'app.js',
    chunkFilename: '[name]_[chunkhash].js',
    path:  paths.appBuild,
    publicPath: paths.appPublic,
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NormalModuleReplacementPlugin(/\.\/async/, './sync'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      __CLIENT__: true,
      __PRODUCTION__: false,
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [paths.appSrc, 'node_modules'],
  },
  module: {
    strictExportPresence: true,
    rules: [
      // Disable require.ensure as it's not a standard language feature.
      { parser: { requireEnsure: false } },
      {
        // "oneOf" will traverse all following loaders until one will
        // match the requirements. When no loader matches it will fall
        // back to the "file" loader at the end of the loader list.
        oneOf: [
          // "url" loader works like "file" loader except that it embeds assets
          // smaller than specified limit in bytes as data URLs to avoid requests.
          // A missing `test` is equivalent to a match.
          {
            test: [/\.jpe?g$/, /\.png$/],
            loader: require.resolve('url-loader'),
            options: {
              limit: 10000,
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
        ],
      },
    ],
  },
};