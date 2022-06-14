const express = require('express')
const routes = express.Router();
const Controller = require('../../../handlers/test.controller.js');

routes.get('/', Controller.test);

module.exports = routes;