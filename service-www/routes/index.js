
/**
* Combine all routes
**/

const home = require('./home');
const health = require('./health');
const subscribe = require('./subscribe');

module.exports = function initializeRoutes(app) {
  app.use('/', home);
  app.use('/health/', health);
  app.use('/api/subscribe/', subscribe);
};
