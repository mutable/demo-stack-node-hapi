const mutable = require('@mutable/meta');
const fetch = require('node-fetch');

const subscribeApi = {};
module.exports = subscribeApi;

/**
* Get API key from Mutable service configuration
* which will later be used to authenticate requests
*/
let apiKey = '';
mutable.config()
  .then((config) => {
    ({ apiKey } = config.api.sendgrid);
  })
  .catch(console.error);

/**
* Receive email address, validate it and subscribe to mailing list
*/
subscribeApi.subscribe = (req, h) => {
  const { email } = req.payload;
  const reg = /\S+@\S+\.\S+/;
  if (!reg.test(email)) {
    return h.response({
      result: 'Invalid email address.',
      error: true,
    }).code(400);
  }
  return fetch('https://api.sendgrid.com/v3/contactdb/recipients', {
    method: 'POST',
    body: JSON.stringify([{ email }]),
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
  })
    .then((fetchRes) => {
      if (fetchRes.status === 201) {
        return h.response({ result: "Thanks for signing up! We'll keep you up to date." }).code(200);
      }
      return h.response({
        result: 'There was an error subscribing your email, please try again.',
        error: true,
      }).code(400);
    })
    .catch(console.error);
};
