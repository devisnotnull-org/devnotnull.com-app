const { compilerOptions } = require("./tsconfig");

const pathsEntries = Object.entries(compilerOptions.paths);

const removeGlobPattern = glob => glob.replace("/*", "");

const prepareName = name => removeGlobPattern(name);

const preparePath = ([path]) =>
  `./${compilerOptions.baseUrl}/${removeGlobPattern(path)}`;

const alias = pathsEntries.reduce(
  (accum, [name, path]) => ({
    ...accum,
    [prepareName(name)]: preparePath(path)
  }),
  {}
);

module.exports = api => {
  const { NODE_ENV, TARGET } = process.env;

  const isProduction = NODE_ENV === 'production';
  const isServer = TARGET === 'server';

  api.cache(() => `${NODE_ENV}${TARGET}`);

  // client settings in .browserslistrc
  const targets = isServer ? { node: 'current' } : undefined;

  const presets = [
    [
      '@babel/env',
      {
        useBuiltIns: 'entry',
        corejs: '3.6',
      },
    ],
    '@babel/preset-typescript',
    '@babel/preset-react',
  ];

  const plugins = [
    ["babel-plugin-module-resolver", { alias }],
  ];

  if (isProduction) {
    plugins.push(['@babel/plugin-transform-react-inline-elements']);
  }

  return {
    ignore: ['*.scss', '/node_modules/'],
    presets,
    plugins,
    "sourceType": "unambiguous"
  };
};
