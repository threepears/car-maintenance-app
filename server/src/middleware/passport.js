import passport from 'passport'

const LocalStrategy = require('passport-local').Strategy;

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, { 'hey': 1, 'somkey': 2 });
});

passport.use(new LocalStrategy(
  function (username, password, done) {
    console.log('*******', username, password)
    // hash password, do something - for new
    // get user object from db

    // User.findOne({ username: username }, function (err, user) {
    //   if (err) { return done(err); }
    //   if (!user) {
    //     return done(null, false, { message: 'Incorrect username.' });
    //   }
    //   if (!user.validPassword(password)) {
    //     return done(null, false, { message: 'Incorrect password.' });
    //   }
    //   return done(null, user);
    // });

    let userObjectNew = {}
    return done(null, userObjectNew)
  }
));

export const authenticate = () => 
  passport.authenticate('local', { failureRedirect: '/login' })

export default passport
