'use strict'

import express from 'express'
import bodyParser from 'body-parser'
import passport from 'passport';
const LocalStrategy = require('passport-local').Strategy;
const app = express()
const router = require('./routes')

const PORT = 5000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/', router)


app.use(passport.initialize());
// app.use(passport.session());

passport.use(new LocalStrategy(
  function (username, password, done) {
    console.log('*******', username, password)
    return done(null, {})
  }
));

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

app.post('/login',
  passport.authenticate('local', { failureRedirect: '/login' }),
  function (req, res) {
    console.log('HERE ***************************************')
    res.redirect('/');
  });



const environment = process.env.NODE_ENV || 'development'    // if something else isn't setting ENV, use development
// const configuration = require('../../knexfile')[environment]    // require environment's settings from knexfile
// const knex = require('knex')(configuration)              // connect to DB via knex using env's settings

// console.log('RES *****************', knex('users').select('*').then(data =>  console.log('data*************', data)))

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
