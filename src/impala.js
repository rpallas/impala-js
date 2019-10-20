const Hotel = require('./hotel')

/**
 * Service to make requests to Impala API.
 * 
 * @module impala
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
      return Hotel(hotelId, api)
    }
  }
}

module.exports = Impala
