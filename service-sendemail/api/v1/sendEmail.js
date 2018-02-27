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
    text: 'We would like to thank you for subscribing to our newsletter and participating in our live demo visit us at http://www.mutable.io',
  }, (err) => {
    if (err) {
      return h.response({ err, result: 'Problem with sending email' }).code(422);
    }
    return h.response({ result: `sent thank you email to ${req.payload.email}` }).code(200);
  });
