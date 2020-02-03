FROM node:12

COPY . app/

WORKDIR /app

RUN npm install
RUN yarn install

RUN npm install --save-dev nodemon sucrase typescript

EXPOSE 3000