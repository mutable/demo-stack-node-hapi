const sendEmailApi = require('../api/v1/sendEmail.js');

const sendEmailRoutes = [];
module.exports = sendEmailRoutes;

sendEmailRoutes.push({
  method: 'POST',
  path: '/api/v1/subscribe/thankyou',
  handler: sendEmailApi.subscribe,
});
