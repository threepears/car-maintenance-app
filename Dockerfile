FROM node:10.11.0-alpine

RUN npm install -g nodemon
RUN npm install -g concurrently

WORKDIR /usr/groupproject/soccerapp

COPY package.json .
RUN npm install --quiet

COPY . .
