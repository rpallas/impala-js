let apis = {};
require('fs').readdirSync(__dirname).forEach((file) => {
  if (file !== 'index.js') {
    apis = {
      ...apis,
      ...require(`./${file.replace('.js', '')}`)
    }
  }
});

/**
 * @module apis/index
 */
module.exports = apis;