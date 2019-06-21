const { Router } = require('express');
const ApiSubscribe = require('../api/subscribe');

const routes = Router();

module.exports = routes;

routes.post('/', ApiSubscribe.subscribe);
routes.post('/success', ApiSubscribe.successEmail);

