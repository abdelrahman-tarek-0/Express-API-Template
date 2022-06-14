const express = require('express')
const routes = express.Router();
const Controller = require('../../../handlers/name.controller.js');

routes.get('/', Controller.name);

module.exports = routes;