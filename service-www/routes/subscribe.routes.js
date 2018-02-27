const { Router } = require('express');
const subscribeApi = require('../api/subscribe.js');

const subscribeRoutes = Router();

subscribeRoutes.post('/', subscribeApi.subscribe);
subscribeRoutes.post('/success', subscribeApi.successEmail);

module.exports = subscribeRoutes;
