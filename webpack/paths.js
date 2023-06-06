import { aquirePath } from './util.js';

const webpackCache = aquirePath('.cache')
const root = aquirePath('..');
const src = aquirePath('..', 'src');
const build = aquirePath('..', 'build')
const media = aquirePath('..', 'media')
const buildMedia = aquirePath('..', 'build/static/media')
const nodeModules = aquirePath('..', 'node_modules')
const babelConfig = aquirePath('..', 'babel.config.js')

export  {
  src,
  root,
  webpackCache,
  build,
  nodeModules,
  babelConfig,
  media,
  buildMedia
};
