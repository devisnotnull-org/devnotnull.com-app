import merge from 'webpack-merge';
import WebpackBar from 'webpackbar';
import AssetsPlugin from 'assets-webpack-plugin';
import { WebpackManifestPlugin } from 'webpack-manifest-plugin';

import { common } from '../common.js';
import { resolve } from 'path';
import { src, build, webpackCache } from '../paths.js';

const config = (env) => merge(common(env), {
  target: 'node',
  entry: [`${src}/server/server`],
  output: {
    libraryTarget: 'commonjs2',
    filename: 'server.js'
  },
  cache: { 
    idleTimeout: 10000000,
    cacheDirectory: resolve(webpackCache, `server-${env}`),
    type: "filesystem",
  },
  plugins: [
    new WebpackBar({ profile: true, name: `Server` }),
    new AssetsPlugin({
      path: build,
      filename: `server-assets.json`,
      prettyPrint: true,
      update: true
    }),
    new WebpackManifestPlugin({
      fileName: 'server-manifest-server.json'
    }),
  ],
  node: {
    __dirname: false,
    __filename: false
  },
});

export { config }
