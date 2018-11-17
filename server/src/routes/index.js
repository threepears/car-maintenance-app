'use strict';

const express = require('express');
const router = express.Router()
const standardResponse = require('../utils/response');
const data = require('../../dev/dummy.json');
console.log(data.serviceShops);
console.log('HERERERERE ************************')


router.get('/', (req, res) => {
  res.send('Welcome to the auto maintenance apps!');
});

router.get('/service-events', (req, res) =>
  res.send(standardResponse(data.serviceEvents))
);

router.get('/service-categories', (req, res) => {
  res.send('Here are some service categories!');
});

router.get('/service-shops', (req, res) =>
  res.send(standardResponse(data.serviceShops))
);

router.get('/users/:userId/profile', (req, res) => {
  res.send('Here is your user profile!');
});

router.get('/users/:userId/vehicles', (req, res) => {
  res.send('Here is a list of vehicles for a user!');
});

router.get('/users/:userId/vehicles/:vehicleId', (req, res) => {
  res.send('Here is a single vehicle for a user!');
});

router.get('/users/:userId/service-shops', (req, res) => {
  res.send('Here is a list of service shops for a user!');
});

router.get('/users/:userId/service-events', (req, res) => {
  res.send('Here is a list of service events for a user!');
});

router.get('/users/:userId/service-events/:serviceEvent', (req, res) => {
  res.send('Here is a single service event for a user!');
});


module.exports = router
