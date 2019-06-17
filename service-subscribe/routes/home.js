const homeApi = require('../api/home.js');

const homeRoutes = [];
module.exports = homeRoutes;

homeRoutes.push({
  method: 'GET',
  path: '/home',
  options: {
    description: 'email homepage',
    tags: ['api', 'mutable', 'subscribe homepage'],
    handler: homeApi.homePage,
  }
});
