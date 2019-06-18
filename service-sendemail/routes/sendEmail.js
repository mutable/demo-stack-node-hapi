const Joi = require('joi');
const Boom = require('boom');

const EMAIL_API = require('../api/sendEmail.js');

const routes = [];
module.exports = routes;

routes.push({
  method: 'POST',
  path: '/api/subscribe/thankyou',
  options: {
    description: 'Than you for subscribing',
    tags: ['api', 'mutable', 'email'],
    handler: EMAIL_API.subscribe,
    validate: {
      payload: {
        email: Joi.string().email().required(),
      },
      failAction: async (request, h, err) => Boom.badRequest(err.details[0].message),
    }
  }
});
