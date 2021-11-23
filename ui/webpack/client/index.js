const enviroment = process.env.NODE_ENV || 'development';

module.exports = require(`./client.${enviroment}`);
