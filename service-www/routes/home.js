const { Router } = require('express');
const homeApi = require('../api/home');

const homeRoutes = Router();

homeRoutes.get('/', homeApi.homePage);

module.exports = homeRoutes;
