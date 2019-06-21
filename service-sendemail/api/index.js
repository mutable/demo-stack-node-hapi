
/**
* DEMO FILE
*
* Dummy API handler
**/

const ApiDummy = {};
module.exports = ApiDummy;

ApiDummy.get = (req) => {
  const { offset, limit } = req.query;  
  
  console.log(limit)
  const parameters = [
    offset ? offset : 0,
    limit ? limit : 10
  ];
  console.log(parameters)
  return  Object.assign({}, {'parameters': parameters, 'message': 'you made a request'});
}