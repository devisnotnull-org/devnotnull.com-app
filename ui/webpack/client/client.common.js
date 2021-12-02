import { resolve  } from 'path';
import merge from 'webpack-merge';
import { ProvidePlugin } from 'webpack';
import WebpackBar from 'webpackbar';
import AssetsPlugin from 'assets-webpack-plugin';
import { WebpackManifestPlugin } from 'webpack-manifest-plugin';
import { build, webpackCache } from '../paths';
import { common } from '../common';

const config = (env) => merge(common(env), {
  target: 'web',
  cache: { 
    idleTimeout: 1000000,
    cacheDirectory: resolve(webpackCache, `client-${env}`),
    type: "filesystem",
  }, 
  plugins: [
    new WebpackBar({ profile: true, name: `Client`, color: 'red' }),
    new ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    }),
  ],
  // Webpack 5 polyfills
  resolve: {
    fallback: {
      https: require.resolve("https-browserify"),
      http: require.resolve("stream-http"),
      buffer: false,
      stream: require.resolve("stream-browserify"),
      os: require.resolve("os-browserify/browser"),
      fs: false,
      module: false,
      net: false,
      tls: false,
      zlib: false,
      crypto: false,
      process: false
    },
    alias: {
      process: "process/browser"
    }
  }  
});

export { config }
