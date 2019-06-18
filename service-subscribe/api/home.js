
/**
* Receive markdown and render it on homepage
*/

const sendMarkdown = require('../utils/sendMarkdown');

const HOME_API = {};
module.exports = HOME_API;

HOME_API.homePage = () => sendMarkdown();
