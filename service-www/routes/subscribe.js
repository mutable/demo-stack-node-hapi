const { Router } = require('express');
const API_SUBSCRIBE = require('../api/subscribe');

const routes = Router();

routes.post('/', API_SUBSCRIBE.subscribe);
routes.post('/success', API_SUBSCRIBE.successEmail);

module.exports = routes;
