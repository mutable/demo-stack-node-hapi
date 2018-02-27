/**
* Monitor service health
*/
const tooBusy = require('toobusy-js');

const healthApi = {};
module.exports = healthApi;

healthApi.healthCheck = () => tooBusy.lag().toString();
