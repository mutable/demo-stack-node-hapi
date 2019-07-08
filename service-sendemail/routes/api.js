
/**
* DEMO FILE
*
* Dummy API route
**/

const Boom = require('@hapi/boom');

const ApiDummy = require('../api/index');
const JoiModels = require('../utils/joi-models');

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
    handler: ApiDummy.get,
    validate: {
      query: Object.assign({}, JoiModels.LIST_DEFAULT)
    },
    response: {
      failAction: FAIL_ACTION
    }
  }
});
