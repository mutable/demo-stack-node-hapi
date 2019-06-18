
/**
* DEMO FILE
*
* Dummy request validator
**/

const Joi = require('@hapi/joi');

// Example validation
const LIST_DEFAULT = {
  offset: Joi.number().optional().default(0).description('Set db query OFFSET'),
  limit: Joi.number().optional().default(10).description('Set db query LIMIT')
}

module.exports = LIST_DEFAULT;