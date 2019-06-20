const Meta = require('@mutable/meta');
const rp = require('request-promise');

const API = {};

module.exports = API;
/**
* Send subscription request to 'service-subscribe'
**/
API.subscribe = (req, res) => {
  Meta.service('service-subscribe')
    .then(service => ({
      method: 'POST',
      uri: `http://${service}/api/demo/subscribe`,
      json: req.body
    }))
    .then(rp)
    .then(body => res.send(body))
    .catch(console.error);
};
/**
* Send subscription email-confirmation request to 'service-sendemail'
**/
API.successEmail = (req, res) => {
  Meta.service('service-sendemail')
    .then(service => ({
      method: 'POST',
      uri: `http://${service}/api/subscribe/thankyou`,
      json: req.body
    }))
    .then(rp)
    .then(body => res.send(body))
    .catch(console.error);
};
