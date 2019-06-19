
/**
* DEMO FILE
*
* Dummy API route
**/

const Boom = require('@hapi/boom');

const API = require('../api/index');
const Joi_Models = require('../utils/joiModels');

const routes = [];
module.exports = routes;

const FAIL_ACTION = async (request, h, err) => Boom.badRequest(err.details[0].message);

// Example request
routes.push({
  method: 'GET',
  path: '/get',    
  options: {
    auth: false,
    description: 'Dummy get request',
    tags: ['api'],
    handler: API.get,
    validate: {
      query: Object.assign({}, Joi_Models.LIST_DEFAULT)
    },
    response: {
      failAction: FAIL_ACTION
    }
  }
});
