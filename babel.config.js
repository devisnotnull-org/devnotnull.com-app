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

  const isProduction = NODE_ENV === "production";
  const isServer = TARGET === "server";

  api.cache(() => `${NODE_ENV}${TARGET}`);

  // client settings in .browserslistrc
  const targets = isServer ? { node: "current" } : undefined;

  const presets = [
    [
      "@babel/preset-env",
      {
        targets,
        loose: true,
        modules: false,
        useBuiltIns: "usage",
        corejs: 3
      }
    ],
    "@babel/preset-typescript",
    "@babel/preset-react"
  ];

  const plugins = [
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    ["babel-plugin-module-resolver", { alias }],
    ["@babel/plugin-transform-runtime"],
    ["@babel/plugin-proposal-do-expressions"],
    ["@babel/plugin-proposal-export-default-from"],
    ["@babel/plugin-proposal-export-namespace-from"],
    ["@babel/plugin-proposal-optional-chaining"],
    ["@babel/plugin-proposal-partial-application"],
    ["@babel/plugin-proposal-throw-expressions"],
    ["@babel/plugin-proposal-nullish-coalescing-operator"],
    [
      "@babel/plugin-proposal-pipeline-operator",
      { proposal: "minimal" }
    ]
  ];

  if (isProduction) {
    plugins.push(["@babel/plugin-transform-react-inline-elements"]);
  }

  return {
    presets,
    plugins
  };
};
