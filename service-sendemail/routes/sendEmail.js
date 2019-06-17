const Joi = require('joi');
const Boom = require('boom');

const sendEmailApi = require('../api/v1/sendEmail.js');

const routes = [];
module.exports = routes;

routes.push({
  method: 'POST',
  path: '/api/v1/subscribe/thankyou',
  options: {
    description: 'Than you for subscribing',
    tags: ['api', 'mutable', 'email'],
    handler: sendEmailApi.subscribe,
    validate: {
      payload: {
        email: Joi.string().email().required(),
      },
      failAction: async (request, h, err) => Boom.badRequest(err.details[0].message),
    }
  }
});
