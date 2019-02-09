'use strict'

import express from 'express'
import middleware from './middleware'


const app = express()
// const publicPath = path.join(__dirname, '..', 'public');

const PORT = 5000


app.use('/', middleware)

// app.use(passport.initialize());
// app.use(passport.session());

// passport.use(new LocalStrategy(
//   function (username, password, done) {
//     console.log('*******', username, password)
//     // hash password, do something - for new
//     // get user object from db

//     // User.findOne({ username: username }, function (err, user) {
//     //   if (err) { return done(err); }
//     //   if (!user) {
//     //     return done(null, false, { message: 'Incorrect username.' });
//     //   }
//     //   if (!user.validPassword(password)) {
//     //     return done(null, false, { message: 'Incorrect password.' });
//     //   }
//     //   return done(null, user);
//     // });

//   let userObjectNew = {}
//   return done(null, userObjectNew)
//   }
// ));

// passport.serializeUser(function (user, done) {
//   done(null, user);
// });

// passport.deserializeUser(function (user, done) {
//   done(null, {'hey':1,'somkey':2});
// });

// app.post('/login',
//   passport.authenticate('local', { failureRedirect: '/login' }),
//   function (req, res) {
//     console.log('HERE ***************************************', req.body)
//     res.redirect('/');
//   });



const environment = process.env.NODE_ENV || 'development'    // if something else isn't setting ENV, use development
// const configuration = require('../../knexfile')[environment]    // require environment's settings from knexfile
// const knex = require('knex')(configuration)              // connect to DB via knex using env's settings

// console.log('RES *****************', knex('users').select('*').then(data =>  console.log('data*************', data)))

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
