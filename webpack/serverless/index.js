const enviroment = process.env.NODE_ENV || 'development';

console.log('***************************************************')
console.log('***************************************************')
console.log('***************************************************')
console.log(enviroment)

const { config } = require(`./serverless.${enviroment}`);

export { config }
