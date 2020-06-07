const merge = require('webpack-merge');

const enviroment = process.env.NODE_ENV || 'development';

const clientConfig = require(`../client/client.${enviroment}`);
const serverConfig = require(`./serverless.${enviroment}`);

module.exports = serverConfig
// module.exports = [serverConfig, clientConfig]