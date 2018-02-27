const express = require('express');
const Keen = require('keen.io');
const lsq = require('lsq');

const api = express.Router();
let keenClient = '';

lsq.config.get().then((c) => {
  keenClient = Keen.configure(c.api.keenio.config);
});

api.post('/add/subscriber/demo', (req, res) => {
  keenClient.addEvent('newSubscriber', req.body, (err) => {
    if (err) console.error('Oh no, an error!', err);
    res.send({ result: 'success' });
  });
});

module.exports = api;
