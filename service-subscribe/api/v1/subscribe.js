const mutable = require('@mutable/meta');
const fetch = require('node-fetch');

const subscribeApi = {};
module.exports = subscribeApi;

/**
* Get API key from Mutable service configuration
* which will later be used to authenticate requests
*/
let apiKey;
mutable.config()
  .then((config) => {
    // ({ apiKey } = config.api.sendgrid);
  })
  .catch(console.error);

/**
* Receive email address, validate it and subscribe to mailing list
*/
subscribeApi.subscribe = (req, h) => {
  const { email } = req.payload;
  return fetch('https://api.sendgrid.com/v3/contactdb/recipients', {
    method: 'POST',
    body: JSON.stringify([{ email }]),
    headers: {
      Authorization: `Bearer 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`,
      'Content-Type': 'application/json',
    },
  })
    .then((res) => {
      if (res.status === 201) {
        return { result: "Thanks for signing up! We'll keep you up to date." };
      }
      throw new Error(res.statusText);
    })
    .catch((err) => {
      console.error(err);
      return h.response({
        result: 'There was an error subscribing your email, please try again.',
        error: true,
      }).code(422);
    });
};
