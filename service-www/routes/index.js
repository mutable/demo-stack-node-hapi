/**
* Combine all routes into one array
*/
const homeRoutes = require('./home');
const healthRoutes = require('./health');
const subscribeRoutes = require('./subscribe');

module.exports = function initializeRoutes(app) {
  app.use('/', homeRoutes);
  app.use('/health/', healthRoutes);
  app.use('/api/v1/subscribe/', subscribeRoutes);
};
