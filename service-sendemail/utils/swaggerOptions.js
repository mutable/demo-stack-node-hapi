const PACKAGE = require('../package.json');

const swaggetOptions = {
  documentationPath: '/',
  info: {
    title: PACKAGE.name,
    description: PACKAGE.description,
    version: PACKAGE.version
  }
}

module.exports = swaggetOptions;
