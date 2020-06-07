const TerserPlugin = require('terser-webpack-plugin');
const merge = require('webpack-merge');
const nodeExternals = require("webpack-node-externals");

const { common } = require('./serverless.common');

module.exports = merge(common, {
  devtool: 'source-map',
  mode: 'production',
  output: {
    libraryTarget: 'commonjs2',
    // path: path.join(__dirname, '.webpack'),

  },
  optimization: {
    minimize: false,
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
        terserOptions: {
          output: {
            comments: false,
            ascii_only: true
          }
        }
      })
    ]
  },
});