const morgan = require('morgan');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const express = require('express');

const sessionConfig = require('./sessionConfig');
const ssr = require('../middleware/ssr');

function configApp(app) {
  app.use(session(sessionConfig));
  app.use(cookieParser());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(morgan('dev'));
  app.use(express.static('public'));
  app.use(ssr);
}
module.exports = configApp;
