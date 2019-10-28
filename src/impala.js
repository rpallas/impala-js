/**
 * @module impala
 */

const Hotel = require('./hotel')

/**
 * Service to make requests to Impala API.
 * 
 * @param  {api} api
 */
function Impala(api) {
  return {
    /**
     * Get a specific hotel given its ID.
     * 
     * @param  {string} hotelId
     */
    getHotel: (hotelId) => {
      return new Hotel(hotelId, api)
    }
  }
}

module.exports = Impala
