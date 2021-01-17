import merge from 'webpack-merge';
import TerserPlugin from 'terser-webpack-plugin';
import { EnvironmentPlugin } from 'webpack';

import { build } from '../paths'
import { config as client } from './client.common';

const config = merge(client('development'), {
  devtool: 'inline-source-map',
  output: {
    filename: 'static/js/[name].js',
    path: `${build}`,
  },
  devServer: {
    port: 9000,
    hot: true,
    compress: false,
    contentBase: build,
  },
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
  plugins: [
    new EnvironmentPlugin({
      NODE_ENV: 'development',
      BROWSER: false,
    }),
  ],
});

export { config }
