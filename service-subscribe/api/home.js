/**
* Receive markdown and render it on homepage
*/
const sendMarkdown = require('../utils/sendMarkdown');

const homeApi = {};
module.exports = homeApi;

homeApi.homePage = () => sendMarkdown();
