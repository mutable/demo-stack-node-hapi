const HOME_API = require('../api/home.js');

const routes = [];
module.exports = routes;

routes.push({
  method: 'GET',
  path: '/home',
  options: {
    description: 'email homepage',
    tags: ['api', 'mutable', 'email homepage'],
    handler: HOME_API.homePage
  }
});
