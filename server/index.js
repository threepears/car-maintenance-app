'use strict';

const express = require('express');
const app = express();
const PORT = 5000;

const standardResponse = require('./utils/response');


app.get('/service-events', (req, res) => res.send(standardResponse({name: 'bert'})));





app.get('/service-categories', (req, res) => {
  res.send('Here are some service categories!');
});

app.get('/service-shops', (req, res) => {
  res.send('Here are some service shops!');
});

app.get('/users/:userId/profile', (req, res) => {
  res.send('Here is your user profile!');
});

app.get('/users/:userId/vehicles', (req, res) => {
  res.send('Here is a list of vehicles for a user!');
});

app.get('/users/:userId/vehicles/:vehicleId', (req, res) => {
  res.send('Here is a single vehicle for a user!');
});

app.get('/users/:userId/service-shops', (req, res) => {
  res.send('Here is a list of service shops for a user!');
});

app.get('/users/:userId/service-events', (req, res) => {
  res.send('Here is a list of service events for a user!');
});

app.get('/users/:userId/service-events/:serviceEvent', (req, res) => {
  res.send('Here is a single service event for a user!');
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
