FROM node:18.15.0-alpine

# Create app directory
WORKDIR /usr/src/app

# Bundle app source
COPY ./build .

EXPOSE 3000

CMD [ "node", "server.js" ]