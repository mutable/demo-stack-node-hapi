/**
* Render homepage template
*/
const homeApi = {};

module.exports = homeApi;

homeApi.homePage = (req, res) => {
  res.render('index', {
    title: 'Home',
  });
};
