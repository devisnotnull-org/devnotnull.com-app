
FROM node:12

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

USER node

RUN yarn install

COPY --chown=node:node . .

RUN yarn build:prod

EXPOSE 8080

CMD [ "node", "dist/index.js" ]