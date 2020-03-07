
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

const devWebpackConfig = require('../../webpack/webpack-development.config.js').default;

export default (app: any) => {
  const compiler = webpack(devWebpackConfig);

  app.use(
    webpackDevMiddleware(compiler, {
      serverSideRender: true,
      publicPath: devWebpackConfig.output.publicPath,
    }),
  );

  app.use(
    webpackHotMiddleware(compiler, {
      log: console.log,
      reload: true,
    }),
  );

  return app;
};
