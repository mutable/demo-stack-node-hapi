const healthApi = require('../api/health');

const health = [];
module.exports = health;

health.push({
  method: 'GET',
  path: '/health',
  options :{
    description: 'Health Check',
    tags: ['api','mutable','Health'],
    handler: healthApi.healthCheck
    }
});
