'use strict'
require('dotenv').config({ silent: true });
const bodyParser  = require('body-parser');
const express     = require('express');
const logger      = require('morgan');
const path        = require('path');
const jwt         = require('jsonwebtoken');
const expressJWT  = require('express-jwt');
const app         = express();
const PORT        = process.argv[2] || process.env.port || 3000;

app.use(logger('dev'));

app.use(bodyParser.json());
// app.use(expressJWT({secret: process.env.secret}).unless(
//   {path: ['/favicon.ico', '/user/signup', '/user/login', '/api/storefronts', '/api/myStorefront', '/api/storefront', '/api/items', '/search/zip']}
// ));

// const userRouter = require('./routes/user.js');
// app.use('/user', userRouter);

app.listen(PORT, () => {console.log('Overpriced organic artisanal tacos on port', PORT)});
