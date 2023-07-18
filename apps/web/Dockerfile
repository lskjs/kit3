# FROM dockerhub.buzz.guru/lskjs/node:20.2.0-alpine
FROM lskjs/node:20.2.0-alpine
# FROM --platform=linux/amd64 node:18-alpine

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app
COPY ./.release/ /app

CMD npm start
EXPOSE 8080