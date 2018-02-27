const subscribeApi = require('../api/v1/subscribe.js');

const subscribeRoutes = [];
module.exports = subscribeRoutes;

subscribeRoutes.push({
  method: 'POST',
  path: '/api/v1/demo/subscribe',
  handler: subscribeApi.subscribe,
});
