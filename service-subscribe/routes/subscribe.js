const Joi = require('@hapi/joi');
const Boom = require('@hapi/boom');

const ApiSubscribe = require('../api/subscribe.js');

const routes = [];
module.exports = routes;

routes.push({
  method: 'POST',
  path: '/api/subscribe',
  options: {
    description: 'Subscribe endpoint',
    tags: ['api', 'mutable', 'subscribe'],
    handler: ApiSubscribe.subscribe,
    validate: {
      payload: {
        email: Joi.string().email().required(),
        source: Joi.string().required()
      },
      failAction: async (request, h, err) => Boom.badRequest(err.details[0].message)
    }
  }
});
