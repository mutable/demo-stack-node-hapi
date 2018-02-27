const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');
const routes = require('./routes/index.js');

const server = new Hapi.Server({
  host: 'localhost',
  port: process.env.PORT || 3000,
});

const liftOff = async () => {
  try {
    await server.register([
      {
        plugin: Inert,
      },
      {
        plugin: Vision,
      },
    ]);

    server.route(routes);
    await server.start();
    console.log('Server running at:', server.info.uri);
  } catch (err) {
    console.error(err);
  }
};
liftOff();
