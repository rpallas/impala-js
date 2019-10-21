/**
 * @module apis/booking
 */

/**
 * Get all bookings for a hotel.
 * 
 * @param  {object} params={} Optional params to be passed to request.
 * @return {Promise<response>} response to the request.
 */
async function getBookings(params = {}) {
  let { startDate, endDate } = params

  // xor
  if (!startDate != !endDate) {
    throw new Error('getBookings requires both startDate and endDate (or neither)')
  }

  if (startDate) {
    params.startDate = this.formatDate(startDate)
    params.endDate = this.formatDate(endDate)
  }

  return await this.get('booking', params)
}

/**
 * Get a specific booking given its ID.
 * 
 * @param  {string} bookingSetId ID of the booking to retrieve.
 * @return {Promise<response>} response to the request.
 */
async function getBookingById(bookingId) {
  return await this.get(`booking/${bookingId}`)
}

/**
 * Create a new booking.
 * 
 * @param  {object} data The data to create the new booking.
 * @return {Promise<response>} response to the request.
 */
async function createBooking(data) {
  return await this.post(`booking`, {}, data)
}

/**
 * Update a specific booking given its ID.
 * 
 * @param  {string} bookingId ID of the booking to update.
 * @param  {object} data The updates to be applied to the booking.
 * @return {Promise<response>} response to the request.
 */
async function updateBookingById(bookingId, data) {
  return await this.patch(`booking/${bookingId}`, {}, data)
}

/**
 * Check in a booking.
 * 
 * @param  {string} bookingId ID of the booking to check in.
 * @return {Promise<response>} response to the request.
 */
async function checkInBookingById(bookingId) {
  return await this.post(`booking/${bookingId}/check-in`)
}

/**
 * Check out a booking.
 * 
 * @param  {string} bookingId ID of the booking to check out.
 * @return {Promise<response>} response to the request.
 */
async function checkOutBookingById(bookingId) {
  return await this.post(`booking/${bookingId}/check-out`)
}

/**
 * Cancel a booking.
 * 
 * @param  {string} bookingId ID of the booking to cancel.
 * @return {Promise<response>} response to the request.
 */
async function cancelBookingById(bookingId) {
  return await this.post(`booking/${bookingId}/cancel`)
}

/**
 * Retrieve a list of all guests for a booking.
 * 
 * @param  {string} bookingId ID of the booking.
 * @return {Promise<response>} response to the request.
 */
async function getGuestsForBooking(bookingId) {
  return await this.get(`booking/${bookingId}/guest`)
}

/**
 * Retrieve a list of bills for a booking.
 * 
 * @param  {string} bookingId ID of the booking.
 * @return {Promise<response>} response to the request.
 */
async function getBillsForBooking(bookingId) {
  return await this.get(`booking/${bookingId}/bill`)
}

module.exports = {
  getBookings,
  getBookingById,
  createBooking,
  updateBookingById,
  checkInBookingById,
  checkOutBookingById,
  cancelBookingById,
  getGuestsForBooking,
  getBillsForBooking
}
