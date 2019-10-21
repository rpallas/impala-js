/**
 * @module apis/rateSet
 */

/**
 * Get all rate sets for a hotel.
 * 
 * @param  {object} params={} Optional params to be passed to request.
 * @return {Promise<response>} response to the request.
 */
async function getRateSets(params = {}) {
  return await this.get('rate-set', params)
}

module.exports = {
  getRateSets
}
