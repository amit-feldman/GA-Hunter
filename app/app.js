const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan('dev'));

// app.use((req, res, next) => {
//   console.log('SOMEONE HIT A ROUTE!!!');
//   next();
// });

module.exports = app;
