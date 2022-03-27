
FROM node:12.22

# Create app directory
WORKDIR /usr/src/app

# Bundle app source
COPY ./node_modules ./node_modules

COPY ./dist .

EXPOSE 3005

CMD [ "node", "server.js" ]