
/**
* Monitor service health
**/

const tooBusy = require('toobusy-js');

const ApiHealth = {};

module.exports = ApiHealth;

ApiHealth.healthCheck = (req, res) => {
  res.send(tooBusy.lag().toString());
};