const homeApi = require('../api/home.js');

const home = [];
module.exports = home;

home.push({
  method: 'GET',
  path: '/home',
  options: {
    description: 'email homepage',
    tags: ['api', 'mutable', 'email homepage'],
    handler: homeApi.homePage,
  }
});
