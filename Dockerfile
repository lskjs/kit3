# FROM dockerhub.buzz.guru/lskjs/node:20.2.0-alpine
FROM lskjs/node:20.2.0-alpine

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app
COPY . /app
RUN npm install

CMD npm start