
/**
* Render the homepage template
**/

const API = {};

module.exports = API;

API.homePage = (req, res) => {
  res.render('index', {
    title: 'Home'
  });
};
