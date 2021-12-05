
import TerserPlugin from 'terser-webpack-plugin';
import WebpackBar from 'webpackbar';
import merge from 'webpack-merge';
import { DefinePlugin } from 'webpack';
// import { WebpackManifestPlugin } from 'webpack-manifest-plugin';

import { config as server } from './server.common';

const config = merge(server, {
  mode: 'development',
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
  devtool: 'source-map',
  output: {
    libraryTarget: 'commonjs2',
    filename: 'server.js'
  },
  plugins: [
    new WebpackBar({ profile: true, name: 'server' }),
    // new WebpackManifestPlugin({
    //   fileName: 'asset-manifest.json'
    // }),
    new DefinePlugin({
      __ASSETS__: JSON.stringify({})
    })
  ]
});

export { config }