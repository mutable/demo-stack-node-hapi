const Hapi = require('@hapi/hapi');
const HapiSwagger = require('hapi-swagger');
const Inert = require('inert');
const Vision = require('vision');

const routes = require('./routes');
const swaggerOptions = require('./utils/swaggerOptions');

const serverInit = async () => {
  const server = Hapi.server({
    port: process.env.PORT || 3000,
    routes: {
      cors: {
        credentials: true,
      }
    }
  });

  await server.register([
    Inert,
    Vision,
    {
      plugin: HapiSwagger,
      options: swaggerOptions
    }
  ]);

  server.route(routes);
  await server.start();
  console.log('Server running at:', server.info.uri);
  return server;
}

process.on('unhandledRejection', (err) => {
  console.error(err);
  process.exit(1);
})

serverInit();
