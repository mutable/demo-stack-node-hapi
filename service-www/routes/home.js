const { Router } = require('express');
const API_HOME = require('../api/home');

const routes = Router();

routes.get('/', API_HOME.homePage);

module.exports = routes;
