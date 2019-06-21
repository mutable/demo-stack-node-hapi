
/**
* Health status check endpoint
**/

const ApiHealth = require('../api/health');

const routes = [];
module.exports = routes;

routes.push({
  method: 'GET',
  path: '/health',
  options :{
    description: 'Health Check',
    tags: ['api','mutable','Health'],
    handler: ApiHealth.healthCheck
    }
});
