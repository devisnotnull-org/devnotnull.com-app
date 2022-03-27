import { createClient } from 'redis';

const client = createClient({ url:  'redis://10.150.10.141:6379' })

client.on('connected', function () {
    console.info('Redis connected');
});

client.on('disconnected', function () {
    console.info('Redis disconnected');
});

client.on('message', function (message) {
    console.info(message);
});

client.on('error', function (error) {
    console.info('Redis error', error);
});

let finalClient = false;

export const getClient = async () =>{
    if(!finalClient) await client.connect()
    finalClient = true
    return client
}