'use strict'

import express from 'express'
import middleware from './middleware'


const app = express()
// const publicPath = path.join(__dirname, '..', 'public');

const PORT = 5000


app.use('/', middleware)

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
