const { Router } = require('express');
const healthApi = require('../api/health');

const routes = Router();

routes.get('/', healthApi.healthCheck);

module.exports = routes;
