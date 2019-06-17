const healthApi = require('../api/health');

const healthRoutes = [];
module.exports = healthRoutes;

healthRoutes.push({
  method: 'GET',
  path: '/health',
  options :{
    description: 'Health Check',
    tags: ['api','mutable','Health'],
    handler: healthApi.healthCheck
    }
});
