const config = require('env-dot-prop');
const dotEnv = require('dotenv');

dotEnv.config({
  path: '../../../.env',
});

config.set('port', config.get('PORT', 3000));

module.exports = config;
