/**
* Combine all routes into one array
*/
const homeRoutes = require('./home');
const healthRoutes = require('./health');
const subscribeRoutes = require('./subscribe');

module.exports = [
  ...homeRoutes,
  ...healthRoutes,
  ...subscribeRoutes,
];
