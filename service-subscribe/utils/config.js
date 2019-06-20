
/**
* DEMO FILE
* 
* Getting Configs set in Mutable App
**/

const Meta = require('@mutable/meta');

const ENV = process.env.NODE_ENV === 'production' ? 'prod' : 'dev';

const Config = {
  content: {}
};

module.exports = Config;

//** Meta.config() returns configurations set in the Mutable app's Configurations tab **//

setConfigs = (mutableConfigs) => {
  Config.content = mutableConfigs;
}

Config.init = Meta.config()
.then(setConfigs)
.catch((e) => {throw e});

Meta.on('configChange', setConfigs);
