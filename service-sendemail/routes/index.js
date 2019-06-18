
/**
* Combine all routes into one array
**/

const home = require('./home');
const health = require('./health');
const email = require('./sendEmail');
const api = require('./api')

const _routes = [health, home, email, api];

const routes = [];

_routes.forEach((_route) => {
	if (typeof _route === 'object' && _route.length) {
		_route.forEach((_r) => { 
			routes.push(_r);
		})
	} else if (typeof _route === 'object') {
		routes.push(_route);
	}
});

module.exports = routes;
