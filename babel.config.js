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
    ['@babel/plugin-proposal-object-rest-spread'],
    ['@babel/plugin-syntax-dynamic-import'],
    ['babel-plugin-root-import'],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-transform-runtime'],
    ['@babel/plugin-proposal-do-expressions'],
    ['@babel/plugin-proposal-export-default-from'],
    ['@babel/plugin-proposal-export-namespace-from'],
    ['@babel/plugin-proposal-optional-chaining'],
    ['@babel/plugin-proposal-partial-application'],
    ['@babel/plugin-proposal-throw-expressions'],
    ['@babel/plugin-proposal-nullish-coalescing-operator'],
    ['@babel/plugin-proposal-pipeline-operator', { proposal: 'minimal' }],
    ["@babel/plugin-proposal-private-property-in-object", { "loose": true }]
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
