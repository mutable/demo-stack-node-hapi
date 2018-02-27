const { Router } = require('express');
const homeApi = require('../api/home.js');

const homeRoutes = Router();

homeRoutes.get('/', homeApi.homePage);

module.exports = homeRoutes;
