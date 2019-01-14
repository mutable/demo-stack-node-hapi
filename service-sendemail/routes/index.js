/**
* Combine all routes into one array
*/
const homeRoutes = require('./home');
const healthRoutes = require('./health');
const sendEmailRoutes = require('./sendEmail');

module.exports = [
  ...homeRoutes,
  ...healthRoutes,
  ...sendEmailRoutes,
];
