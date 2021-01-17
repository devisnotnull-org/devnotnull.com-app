import TerserPlugin from 'terser-webpack-plugin';
import merge from 'webpack-merge';
import { EnvironmentPlugin, DefinePlugin } from 'webpack';

import { config as server } from './serverless.common';

const config = merge(server('development'), {
  devtool: true,
  mode: 'development',
  devtool: 'source-map',
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
    new DefinePlugin({
      __ASSETS__: JSON.stringify({})
    }),
    new EnvironmentPlugin({
      NODE_ENV: 'development',
      BROWSER: false
    }),
  ],
})

export { config }
