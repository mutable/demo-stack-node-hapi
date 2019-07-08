
/**
* Combine all routes into one array
**/

const home = require('./home');
const health = require('./health');
const email = require('./sendEmail');
const api = require('./api')

const _routes = [health, home, email, api];

const Routes = [];

_routes.forEach((_route) => {
	if (typeof _route === 'object' && _route.length) {
		_route.forEach((_r) => { 
		Routes.push(_r);
		})
	} else if (typeof _route === 'object') {
	Routes.push(_route);
	}
});

module.exports = Routes;
