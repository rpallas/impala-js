/**
 * Responsible for loading the apis
 * 
 * @module apis
 */

let apis = {};
require('fs').readdirSync(__dirname).forEach((file) => {
  if (file !== 'index.js') {
    apis = {
      ...apis,
      ...require(`./${file.replace('.js', '')}`)
    }
  }
});

module.exports = apis;
