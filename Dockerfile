FROM oven/bun:1

# Create app directory
WORKDIR /usr/src/app

# Bundle app source
COPY ./build .

EXPOSE 3000

CMD [ "bun", "run", "server.js" ]