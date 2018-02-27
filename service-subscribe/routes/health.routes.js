const healthApi = require('../api/health.js');

const healthRoutes = [];
module.exports = healthRoutes;

healthRoutes.push({
  method: 'GET',
  path: '/health',
  handler: healthApi.healthCheck,
});
