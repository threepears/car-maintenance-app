'use strict';

const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.static('dist'))

app.get('/api/getGreeting', (req, res) => {
  res.send('hello there dude!');
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
