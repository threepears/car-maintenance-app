'use strict'

import express from 'express'

const app = express()
const router = require('./routes')
const PORT = 5000

app.use('/', router)

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
