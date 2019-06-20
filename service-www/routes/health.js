const { Router } = require('express');
const API_HEALTH = require('../api/health');

const routes = Router();

routes.get('/', API_HEALTH.healthCheck);

module.exports = routes;
