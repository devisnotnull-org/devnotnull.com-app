import webpack from 'webpack';

import { resolve as _resolve } from 'path';
import { root, build, nodeModules, babelConfig } from './paths.js';

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
      //"react-dom": "@hot-loader/react-dom",
      "@styles": "./web/style",
      "@web/*": "./web",
      "@client/*": "./client",
      "@components/*": "./web/components",
      "@core/*": "./core",
      "@config/*": "./config"
    }
  },
  module: {
    rules: [
  
      {
        test: /\.(ts|js)x?$/,
        exclude: nodeModules,
        loader: "babel-loader",
        options: {
          cacheDirectory: false,
          compact: env === 'production',
          configFile: babelConfig,
          cacheCompression: env === 'production'
        }
      },
     /** 
           {
                 // Match js, jsx, ts & tsx files
                 test: /\.(ts|js)x?$/,
                 exclude: nodeModules,
                 loader: 'esbuild-loader',
                 options: {
                   // JavaScript version to compile to
                   target: 'es2015',
                   tsconfig: './tsconfig.json'
                 }
               },
               **/
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
    new webpack.ProgressPlugin({
      activeModules: true
    }),
    //
    new webpack.SourceMapDevToolPlugin({
      filename: '__sourcemaps/[name].[chunkhash:8].js.map',
      include: ['bundle', 'vendor'],
      noSources: true
    }),
    //
    new TsconfigPathsPlugin({})
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