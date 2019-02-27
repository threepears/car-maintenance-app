import bodyParser from 'body-parser'
import passport from './passport'
import routes from '../routes'

const middleware = [
  bodyParser.urlencoded({ extended: false }),
  bodyParser.json(),
  // bodyParser.text(),
  passport.initialize(),
  passport.session(),
  routes,
]

export default middleware