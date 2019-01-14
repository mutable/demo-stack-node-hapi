const Joi = require('joi');
const Boom = require('boom');

const sendEmailApi = require('../api/v1/sendEmail.js');

const sendEmailRoutes = [];
module.exports = sendEmailRoutes;

sendEmailRoutes.push({
  method: 'POST',
  path: '/api/v1/subscribe/thankyou',
  handler: sendEmailApi.subscribe,
  config: {
    validate: {
      payload: {
        email: Joi.string().email().required(),
      },
      failAction: async (request, h, err) => Boom.badRequest(err.details[0].message),
    },
  },
});
