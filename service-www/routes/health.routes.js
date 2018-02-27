const { Router } = require('express');
const healthApi = require('../api/health.js');

const healthRoutes = Router();

healthRoutes.get('/', healthApi.healthCheck);

module.exports = healthRoutes;
