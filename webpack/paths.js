import { resolve } from 'path';

const webpackCache = resolve(__dirname, '.cache')
const root = resolve(__dirname, '..');
const src = resolve(root, 'src');
const build = resolve(root, 'build')
const media = resolve(root, 'media')
const buildMedia = resolve(root, 'build/static/media')
const nodeModules = resolve(root, 'node_modules')
const babelConfig = resolve(root, 'babel.config.js')
const tsconfigConfig = resolve(root, 'tsconfig.json')

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
