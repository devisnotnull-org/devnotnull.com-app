import { resolve } from 'path';

const webpackCache = resolve(__dirname, '.cache')
const root = resolve(__dirname, '..');
const src = resolve(root, 'src');
const build = resolve(root, 'build')
const nodeModules = resolve(root, 'node_modules')
const babelConfig = resolve(root, 'babel.config.js')

export  {
  src,
  root,
  webpackCache,
  build,
  nodeModules,
  babelConfig
};
