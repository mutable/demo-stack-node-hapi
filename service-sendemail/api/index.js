
/**
* DEMO FILE
*
* Dummy API handler
**/

const API = {};
module.exports = API;

API.get = (req) => {
  const { offset, limit } = req.query;  
  
  console.log(limit)
  const parameters = [
    offset ? offset : 0,
    limit ? limit : 0
  ];
  console.log(parameters)
  return  Object.assign({}, {'parameters': parameters, 'message': 'you made a request'})
}