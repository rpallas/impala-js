/**
 * @module apis/extra
 */

/**
 * Get all extras.
 * 
 * @param  {object} params={} Optional params to be passed to request.
 * @return {Promise<response>} response to the request.
 */
async function getExtras(params = {}) {
  return await this.get('extra', params)
}

/**
 * Get a specific extra given its ID.
 * 
 * @param  {string} guestId ID of the extra to retrieve.
 * @return {Promise<response>} response to the request.
 */
async function getExtraById(extraId) {
  return await this.get(`extra/${extraId}`)
}

module.exports = {
  getExtras,
  getExtraById
}
