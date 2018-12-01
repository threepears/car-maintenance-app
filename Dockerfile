FROM node:10.11.0-alpine

RUN npm install -g nodemon
RUN npm install -g knex
RUN npm install -g concurrently

WORKDIR /usr/groupproject/autoapp

COPY package.json .
RUN npm install --quiet

COPY . .
