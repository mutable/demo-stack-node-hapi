
/**
* Monitor service health
**/

const tooBusy = require('toobusy-js');

const ApiHealth = {};
module.exports = ApiHealth;

ApiHealth.healthCheck = () => tooBusy.lag().toString();
