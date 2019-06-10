const { Router } = require('express');
const subscribeApi = require('../api/subscribe');

const subscribeRoutes = Router();

subscribeRoutes.post('/', subscribeApi.subscribe);
subscribeRoutes.post('/success', subscribeApi.successEmail);

module.exports = subscribeRoutes;
