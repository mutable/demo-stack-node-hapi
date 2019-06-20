const Config = require('../utils/config');
const fetch = require('node-fetch');

const API = {};
module.exports = API;

/**
* Get API key from Mutable service configuration
* which will later be used to authenticate requests
**/

let apiKey = '';

/**
* Receive email address, validate it and subscribe to mailing list
**/

API.subscribe = (req, h) => {
  apiKey = Config.content.sendGrid.apiKey;
  const { email } = req.payload;
  return fetch('https://api.sendgrid.com/v3/contactdb/recipients', {
    method: 'POST',
    body: JSON.stringify([{ email }]),
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    }
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
        error: true
      }).code(422);
    });
};
