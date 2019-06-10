const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');

const routes = require('./routes');

const server = new Hapi.Server({
  port: process.env.PORT || 3000,
});

const init = async () => {
  await server.register([
    { plugin: Inert },
    { plugin: Vision },
  ]);

  server.route(routes);
  await server.start();
  console.log('Server running at:', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.error(err);
  process.exit(1);
});

init();
