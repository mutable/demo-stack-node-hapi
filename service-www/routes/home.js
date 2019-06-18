const { Router } = require('express');
const homeApi = require('../api/home');

const routes = Router();

routes.get('/', homeApi.homePage);

module.exports = routes;
