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
 * @param {string} hotelId Optional hotel ID
 * @returns {object} a hotel or impala instance
 */
function create(apiKey, hotelId) {
  const client = Got.extend({ baseUrl })
  const api = Api(apiKey, client)
  const impala = Impala(api)
  if (hotelId) {
    return impala.getHotel(hotelId)
  }
  return impala
}

module.exports = {
  create
}
