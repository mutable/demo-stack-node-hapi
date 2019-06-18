const Meta = require('@mutable/meta');
const fetch = require('node-fetch');

const SUBSCRIBE_API = {};
module.exports = SUBSCRIBE_API;

/**
* Get API key from Mutable service configuration
* which will later be used to authenticate requests
**/

// CHANGE THIS!!!!
let apiKey;
Meta.config()
  .then((config) => {
    ({ apiKey } = config.api.sendgrid);
  })
  .catch(console.error);

/**
* Receive email address, validate it and subscribe to mailing list
**/
SUBSCRIBE_API.subscribe = (req, h) => {
  const { email } = req.payload;
  return fetch('https://api.sendgrid.com/v3/contactdb/recipients', {
    method: 'POST',
    body: JSON.stringify([{ email }]),
    headers: {
      Authorization: `Bearer ${apiKey}`,
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
