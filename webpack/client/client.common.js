import { resolve  } from 'path';
import { merge } from 'webpack-merge';
import webpack from 'webpack';
import WebpackBar from 'webpackbar';
import { webpackCache } from '../paths.js';
import { common } from '../common.js';

export default (env) => merge(common(env), {
  target: 'web',
  cache: { 
    idleTimeout: 1000000,
    cacheDirectory: resolve(webpackCache, `client-${env}`),
    type: "filesystem",
  }, 
  plugins: [
    new WebpackBar({ profile: true, name: `Client`, color: 'red' }),
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    }),
  ],
  // Webpack 5 polyfills
  resolve: {
    fallback: {
      https: resolve("https-browserify"),
      http: resolve("stream-http"),
      buffer: false,
      stream: resolve("stream-browserify"),
      os: resolve("os-browserify/browser"),
      fs: false,
      module: false,
      net: false,
      tls: false,
      zlib: false,
      crypto: false,
      process: false,
      path: resolve("path-browserify")
    },
    alias: {
      process: "process/browser"
    }
  }  
});
