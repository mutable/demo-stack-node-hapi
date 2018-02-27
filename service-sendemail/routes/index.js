/**
* Combine all routes into one array
*/
const homeRoutes = require('./home.routes.js');
const healthRoutes = require('./health.routes.js');
const sendEmailRoutes = require('./sendEmail.routes.js');

module.exports = [
  ...homeRoutes,
  ...healthRoutes,
  ...sendEmailRoutes,
];
