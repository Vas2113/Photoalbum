const morgan = require('morgan');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const express = require('express');
const {
  cookiesCleaner, resLocals, getUser,
} = require('../middleware/auth');

const sessionConfig = require('./sessionConfig');
const ssr = require('../middleware/ssr');

function configApp(app) {
  app.use(session(sessionConfig));
  app.use(cookieParser());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(morgan('dev'));
  app.use(cookiesCleaner);
  app.use(resLocals);
  app.use(getUser);
  app.use(express.static('public'));
  app.use(ssr);
}
module.exports = configApp;
