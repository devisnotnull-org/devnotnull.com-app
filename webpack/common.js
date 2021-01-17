import { ProgressPlugin, SourceMapDevToolPlugin } from 'webpack';
import CircularDependencyPlugin from 'circular-dependency-plugin';

import { resolve as _resolve } from 'path';
import { root, build, nodeModules, babelConfig } from './paths';

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
      "react-dom": "@hot-loader/react-dom",
      "@style": "./web/style",
      "@web/*": "./web",
      "@client/*": "./client",
      "@server/*": "./server",
      "@core/*": "./core",
      "@config/*": "./config"
    }
  },
  module: {
    rules: [
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