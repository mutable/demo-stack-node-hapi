const homeApi = require('../api/home.js');

const homeRoutes = [];
module.exports = homeRoutes;

homeRoutes.push({
  method: 'GET',
  path: '/',
  handler: homeApi.homePage,
});
