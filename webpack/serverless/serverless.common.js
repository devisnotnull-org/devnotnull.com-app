import { merge } from 'webpack-merge';
import WebpackBar from 'webpackbar';
import AssetsPlugin from 'assets-webpack-plugin';
import { WebpackManifestPlugin } from 'webpack-manifest-plugin';
import NodePolyfillPlugin from "node-polyfill-webpack-plugin"

import { common } from '../common.js';
import { resolve } from 'path';
import { src, build, webpackCache } from '../paths.js';

import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

export default (env) => merge(common(env), {
  entry: ["regenerator-runtime/runtime", `${src}/server/handler`],
  output: {
    filename: 'serverless.js',
    globalObject: `typeof self !== 'undefined' ? self : this`
  },
  experiments: {
    outputModule: true,
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
    new NodePolyfillPlugin()
  ],
  node: {
    __dirname: false,
    __filename: false
  },
  /**
  resolve: {
    fallback: {
      "path": false,
      "stream": false,
      "assert": false,
      "https": false,
      "http": false,
      "crypto": false,
      zlib: false,
      "fs": false,
      "os": false,
      async_hooks: false,
      net: false
    }
  
  }**/
});
