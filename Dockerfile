FROM node:12

COPY . app/

WORKDIR /app

RUN yarn install

EXPOSE 3333