'use strict';

const express = require('express');
const router = express.Router()
import passport from '../middleware/passport';
// const LocalStrategy = require('passport-local').Strategy;
import { auth } from './auth'

const environment = process.env.NODE_ENV || 'development'    // if something else isn't setting ENV, use development
const configuration = require('../../../knexfile')[environment]    // require environment's settings from knexfile
const knex = require('knex')(configuration)              // connect to DB via knex using env's settings
const standardResponse = require('../utils/response');
const data = require('../../dev/dummy.json');

// passport.serializeUser(function (user, done) {
//   done(null, user);
// });

// passport.deserializeUser(function (user, done) {
//   done(null, user);
// });

router.get('/', (req, res) => {
  res.send('default route works again');
});

// passport.use(new LocalStrategy(
//   function (username, password, done) {
//     console.log('*******', username, password)
//     return done(null, {})
//   }
// ));

// router.post('/api/auth/', passport.authenticate('local', { failureRedirect: '/login' }), (req, res) => {
//   console.log('here')
// })

router.post('/api/auth/', auth)

router.get('/service-events', (req, res) => {
  res.send(standardResponse(data.serviceEvents))
});

router.get('/service-categories', (req, res) => {
  res.send('Here are some service categories!');
});

router.post('/api/service-categories', (req, res) => {
  console.log(req.body.name)
  knex('service_category')
    .insert({ name: req.body.name })
    .catch(function(err) {
      console.error(err)
    })
  res.send('much success')
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
