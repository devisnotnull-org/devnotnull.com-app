const { resolve } = require('path');

const target = process.env.TARGET || 'client';
const enviroment = process.env.NODE_ENV || 'development';

const hey = resolve(__dirname, 'webpack', target, `${target}.${enviroment}.js`)

console.log('--------------------------------------')
console.log('--------------------------------------')
console.log(hey)

module.exports = require(resolve(__dirname, 'webpack', target, `${target}.${enviroment}.js`));
