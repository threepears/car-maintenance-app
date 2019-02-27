import passport from 'passport'
import crypto from 'crypto'

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
    console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& new local strategy')
    
    // possible use bcrypt per https://stackoverflow.com/questions/6951867/nodejs-bcrypt-vs-native-crypto
    let devSalt = 'bigBuddiesSalt'
    let hashedPassword = crypto.createHash('sha256');
    hashedPassword.update(devSalt+password)
    console.log('SALTED PASSWURD', hashedPassword.digest('hex'))

    // connect to db via knex and store the user

    // hash password, do something - for new
    // get user object from db

    // console.log('here **********************', username, password)

    // const key = crypto.scryptSync(password, "bigbuddies", 64);
    // const cipher = crypto.createCipheriv('aes192', key, null);
    // let encrypted = cipher.update(password, 'utf8', 'hex');
    // encrypted += cipher.final('hex');

    // console.log("ENCRYPTED", encrypted)

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
