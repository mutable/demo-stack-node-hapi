const { Router } = require('express');
const subscribeApi = require('../api/subscribe');

const routes = Router();

routes.post('/', subscribeApi.subscribe);
routes.post('/success', subscribeApi.successEmail);

module.exports = routes;
