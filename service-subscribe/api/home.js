
/**
* Receive markdown and render it on homepage
*/

const sendMarkdown = require('../utils/sendMarkdown');

const ApiHome = {};
module.exports = ApiHome;

ApiHome.homePage = () => sendMarkdown();
