
/**
* Render the homepage template
**/

const ApiHome = {};

module.exports = ApiHome;

ApiHome.homePage = (req, res) => {
  res.render('index', {
    title: 'Home'
  });
};
