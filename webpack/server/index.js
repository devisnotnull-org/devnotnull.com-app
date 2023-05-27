const enviroment = process.env.NODE_ENV || 'development';

console.log("@@@@@@@@@@@@@")
console.log("@@@@@@@@@@@@@")
console.log(`./server.${enviroment}.js`)

const config = await import(`./server.${enviroment}.js`);

console.log("&&&&&&&&&&&")
console.log("&&&&&&&&&&&")
console.log(config)

export { config }
