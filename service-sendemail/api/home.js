
/**
* Receive markdown and render it on homepage
*/

const sendMarkdown = require('../utils/sendMarkdown');

const API = {};
module.exports = API;

API.homePage = () => sendMarkdown();
