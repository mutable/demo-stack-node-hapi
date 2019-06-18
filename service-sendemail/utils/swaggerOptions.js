
/**
* DEMO FILE
*
* Swagger options configuration
**/

const PACKAGE = require('../package.json');

swaggerOptions = {
  documentationPath: '/',
  auth: false,
  schemes: ['http', 'https'],
  securityDefinitions: {
    Bearer: {
      type: 'apiKey',
      name: 'Authorization',
      in: 'header'
    }
  },
  security: [{ Bearer: [] }],
  info: {
    title: PACKAGE.name,
    description: PACKAGE.description,
    version: PACKAGE.version
  }
};

module.exports = swaggerOptions;