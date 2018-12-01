# Car Maintenance Tracker

An application to keep track of your automotive work, maintenance, and history

## Dev Environment Guide

This app allows developers to use Docker for local development. To get started, install Docker and Docker Compose on your machine. (If Mac, you can download [here](https://docs.docker.com/docker-for-mac/install/), and you will have both.)

#### Getting Started with Docker for Development

After installing Docker, you can run the following commands to get started with our dev build:

1. Clone onto your machine `git clone https://github.com/threepears/car-maintenance-app.git` 
2. Go into app directory `cd car-maintenance-app`
3. Build and spin up app `docker-compose up`

After the build process finishes and Docker is running, you will be able to access the following features:

1. Docker will now run our api and is accessible from `localhost:4000`
2. Docker will now run our web server front end and is accessible from `localhost:8080`
3. Docker will now run postgres on port 5432 under the user dev with password dev
4. Docker will now run pgAdmin, a postgres gui accessible from `localhost:5050`

##### Additional Docker Information relative to this dev build

1. Run npm commands `docker-compose run web npm someCommand`