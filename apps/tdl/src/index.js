/* eslint-disable no-console */
const express = require('express');
const { stage } = require('@lskjs/env');

const app = express();
const port = process.env.PORT || 8000;

app.all('*', (req, res) => {
  res.send(`Hello API World from TDL: ${stage}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
