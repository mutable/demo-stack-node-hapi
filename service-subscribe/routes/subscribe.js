const Joi = require('joi');
const Boom = require('boom');

const SUBSCRIBE_API = require('../api/subscribe.js/index.js');

const routes = [];
module.exports = routes;

routes.push({
  method: 'POST',
  path: '/api/demo/subscribe',
  options: {
    description: 'Subscribe endpoint',
    tags: ['api', 'mutable', 'subscribe'],
    handler: SUBSCRIBE_API.subscribe,
    validate: {
      payload: {
        email: Joi.string().email().required(),
        source: Joi.string().required(),
      },
      failAction: async (request, h, err) => Boom.badRequest(err.details[0].message),
    }
  }
});
