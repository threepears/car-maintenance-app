'use strict'

import express from 'express'

const app = express()
const router = require('./routes')
const PORT = 5000

app.use('/', router)

const environment = process.env.NODE_ENV || 'development'    // if something else isn't setting ENV, use development
const configuration = require('../../knexfile')[environment]    // require environment's settings from knexfile
const knex = require('knex')(configuration)              // connect to DB via knex using env's settings

console.log('RES ****************', knex('users').select('*').then(data =>  console.log('data*************', data)))

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
