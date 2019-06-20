const Hapi = require('@hapi/hapi');
const HapiSwagger = require('hapi-swagger');
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');

const Config = require('./utils/config');
const routes = require('./routes');
const swaggerOptions = require('./utils/swaggerOptions.js');

const setMutableConfig = () => {
  Config.init;
}

(async () => {
  setMutableConfig();

  const server = await new Hapi.Server({
    port: process.env.PORT || 3000,
    routes: {
      cors: {
        origin: ['*']
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

  try {
    server.route(routes);
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
  } catch (err) {
    console.error(err);
  }
})();

process.on('unhandledRejection', (err) => {
  console.error(err);
  process.exit(1);
});
