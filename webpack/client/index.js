console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&')
console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&')
console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&')
console.log(process.env.NODE_ENV)

const enviroment = process.env.NODE_ENV || 'development';

const { config } = require(`./client.${enviroment}`);

export { config }
