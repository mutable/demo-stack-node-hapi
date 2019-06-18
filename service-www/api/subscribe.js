const mutable = require('@mutable/meta');
const rp = require('request-promise');

const subscribeApi = {};

module.exports = subscribeApi;
/**
* Send subscription request to 'service-subscribe'
*/
subscribeApi.subscribe = (req, res) => {
  mutable.service('service-subscribe')
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
*/
subscribeApi.successEmail = (req, res) => {
  mutable.service('service-sendemail')
    .then(service => ({
      method: 'POST',
      uri: `http://${service}/api/subscribe/thankyou`,
      json: req.body
    }))
    .then(rp)
    .then(body => res.send(body))
    .catch(console.error);
};
