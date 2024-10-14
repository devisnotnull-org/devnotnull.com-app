import { ProgressPlugin, SourceMapDevToolPlugin } from 'webpack';

import { resolve } from 'path';
import { root, build, nodeModules, babelConfig, tsconfigConfig } from './paths';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

const publicPath = '/';

const common = (env) => ({
  mode: env,
  context: root,
  output: {
    publicPath,
    path: build
  },
  resolve: {
    mainFields: ["module", "browser", "main"],
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    alias: {
      "@styles": "../src/web/style",
      "@web/*": "../src/web",
      "@client/*": "../src/client",
      "@server/*": "../src/server",
      "@components/*": "../src/web/components",
      "@core/*": "../src/core",
      "@config/*": "../src/config"
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: nodeModules,
        loader: "babel-loader",
        options: {
          cacheDirectory: true,
          compact: env === 'production',
          configFile: babelConfig,
          cacheCompression: env === 'production'
        }
      },
      {
        loader: "file-loader",
        exclude: [/\.m?([jt])sx?$/, /\.json$/, /\.css$/],
        options: {
          emitFile: true,
          name: "assets/[name].[hash:8].[ext]"
        }
      }
    ]
  },
  plugins: [
    //
    new ProgressPlugin({
      activeModules: true
    }),
    new TsconfigPathsPlugin({/* options: see below */}),
    //
    new SourceMapDevToolPlugin({
      filename: '__sourcemaps/[name].[chunkhash:8].js.map',
      include: ['bundle', 'vendor'],
      noSources: true
    }),
  ],
  stats: {
    colors: true,
    modules: true,
    children: true
  },
  performance: {
    hints: 'warning'
  }
})

export {
  common,
  publicPath
}