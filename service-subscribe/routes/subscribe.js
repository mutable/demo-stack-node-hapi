const Joi = require('joi');
const Boom = require('boom');

const subscribeApi = require('../api/v1/subscribe.js');

const subscribeRoutes = [];
module.exports = subscribeRoutes;

subscribeRoutes.push({
  method: 'POST',
  path: '/api/v1/demo/subscribe',
  options: {
    description: 'Subscribe endpoint',
    handler: subscribeApi.subscribe,
    tags: ['api', 'mutable', 'subscribe'],
    validate: {
      payload: {
        email: Joi.string().email().required(),
        source: Joi.string().required(),
      },
      failAction: async (request, h, err) => Boom.badRequest(err.details[0].message),
    },
  },
});
