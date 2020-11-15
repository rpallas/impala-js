/**
 * @module index
 */

const Got = require('got')

const Api = require('./api')
const Impala = require('./impala')

const baseUrl = 'https://api.getimpala.com/v2/'

/**
 * Creates a new Impala instance.
 *
 * Injects an API service into the Impala object.
 * If a hotel ID is passed uses the Impala object to get a hotel object and
 * return it, otherwise returns the Impala object itself.
 * @param {string} apiKey API key to access Impala
 * @param {string|object} config Optional config object or hotel ID string
 * config.hotelId - optional hotel ID
 * config.useragent - optional useragent string that is appended to the User-Agent header in requests
 * @returns {object} a hotel or impala instance
 */
function create(apiKey, config = {}) {
  if (typeof config === 'string') { // backwards compatibility
    config = { hotelId: config }
  }
  const client = Got.extend({ baseUrl })
  const api = Api(apiKey, client, config)
  const impala = Impala(api)
  if (config.hotelId) {
    return impala.getHotel(config.hotelId)
  }
  return impala
}

module.exports = {
  create
}
