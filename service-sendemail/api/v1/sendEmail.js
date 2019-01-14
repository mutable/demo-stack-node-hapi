const sendgrid = require('@sendgrid/mail');
const mutable = require('@mutable/meta');

const sendEmailApi = {};
module.exports = sendEmailApi;

/**
* Get API key from Mutable service configuration
* and pass it to Sendgrid for authentication
*/
mutable.config()
  .then((config) => {
    sendgrid.setApiKey(config.api.sendgrid.apiKey);
  })
  .catch(console.error);

/**
* Send thank you email to subscriber using Sendgrid
*/
sendEmailApi.subscribe = (req, h) =>
  sendgrid.send({
    to: req.payload.email,
    from: 'i@mutable.io',
    subject: 'Thanks for subscribing (Mutable)',
    text: 'We would like to thank you for subscribing to our newsletter and participating in our live demo. Visit us at http://www.mutable.io',
  })
    .then((res) => {
      if (res[0].statusCode === 202) return { result: `Sent thank you email to ${req.payload.email}` };
      throw new Error(res.statusText);
    })
    .catch((err) => {
      console.error(err);
      return h.response({
        result: 'Problem with sending email',
        err,
      }).code(422);
    });
