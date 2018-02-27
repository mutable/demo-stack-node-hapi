/**
* Combine all routes into one array
*/
const homeRoutes = require('./home.routes');
const healthRoutes = require('./health.routes');
const subscribeRoutes = require('./subscribe.routes');

module.exports = function initializeRoutes(app) {
  app.use('/', homeRoutes);
  app.use('/health/', healthRoutes);
  app.use('/api/v1/subscribe/', subscribeRoutes);
};
