const Meta = require('@mutable/meta');
const rp = require('request-promise');

const Api = {};

module.exports = Api;
/**
* Send subscription request to 'service-subscribe'
**/
Api.subscribe = (req, res) => {
  Meta.service('service-subscribe')
    .then(service => ({
      method: 'POST',
      uri: `http://${service}/api/subscribe`,
      json: req.body
    }))
    .then(rp)
    .then(body => res.send(body))
    .catch(console.error);
};
/**
* Send subscription email-confirmation request to 'service-sendemail'
**/
Api.successEmail = (req, res) => {
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
