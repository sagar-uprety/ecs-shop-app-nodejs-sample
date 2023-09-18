# Dockerfile for order-service
FROM --platform=linux/amd64 node:lts-alpine

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3000

ENTRYPOINT [ "node", "app.js" ]
