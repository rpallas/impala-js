/**
 * @module apis/bookingSet
 */

/**
 * Get all booking sets for a hotel.
 * 
 * @param  {object} params={} Optional params to be passed to request.
 * @return {Promise<response>} response to the request.
 */
async function getBookingSets(params = {}) {
  return await this.get('booking-set', params)
}

/**
 * Get a specific booking set given its ID.
 * 
 * @param  {string} bookingSetId ID of the booking set to retrieve.
 * @return {Promise<response>} response to the request.
 */
async function getBookingSetById(bookingSetId) {
  return await this.get(`booking-set/${bookingSetId}`)
}

/**
 * Create a new booking set.
 * 
 * @param  {object} data The data to create the new booking set.
 * @return {Promise<response>} response to the request.
 */
async function createBookingSet(data) {
  return await this.post(`booking-set`, {}, data)
}

/**
 * Update a specific booking set given its ID.
 * 
 * @param  {string} bookingSetId ID of the booking set to update.
 * @param  {object} data The updates to be applied to the booking set.
 * @return {Promise<response>} response to the request.
 */
async function updateBookingSet(bookingSetId, data) {
  return await this.patch(`booking-set/${bookingSetId}`, {}, data)
}

module.exports = {
  getBookingSets,
  getBookingSetById,
  createBookingSet,
  updateBookingSet
}
