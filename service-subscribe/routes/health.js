
/**
* Health status check endpoint
**/

const HEALTH_API = require('../api/health');

const routes = [];
module.exports = routes;

routes.push({
  method: 'GET',
  path: '/health',
  options :{
    description: 'Health Check',
    tags: ['api','mutable','Health'],
    handler: HEALTH_API.healthCheck
    }
});
