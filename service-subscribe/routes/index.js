/**
* Combine all routes into one array
*/
const homeRoutes = require('./home.routes');
const healthRoutes = require('./health.routes');
const subscribeRoutes = require('./subscribe.routes');

module.exports = [
  ...homeRoutes,
  ...healthRoutes,
  ...subscribeRoutes,
];
