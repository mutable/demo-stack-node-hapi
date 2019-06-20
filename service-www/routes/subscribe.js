const { Router } = require('express');
const API_SUBSCRIBE = require('../api/subscribe');

const routes = Router();

module.exports = routes;

routes.post('/', API_SUBSCRIBE.subscribe);
routes.post('/success', API_SUBSCRIBE.successEmail);

