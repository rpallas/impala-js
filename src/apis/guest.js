/**
 * Get all guests for a hotel.
 * 
 * @param  {object} params={} Optional params to be passed to request.
 * @return {Promise<response>} response to the request.
 */
async function getGuests(params = {}) {
  let { startDate, endDate } = params

  if (!startDate || !endDate) {
    throw new Error('getGuests requires both startDate and endDate')
  }

  params.startDate = this.formatDate(startDate)
  params.endDate = this.formatDate(endDate)

  return await this.get('guest', params)
}

/**
 * Get a specific guest given its ID.
 * 
 * @param  {string} guestId ID of the guest to retrieve.
 * @return {Promise<response>} response to the request.
 */
async function getGuestById(guestId) {
  return await this.get(`guest/${guestId}`)
}

/**
 * Create a new guest.
 * 
 * @param  {object} data The data to create the new guest.
 * @return {Promise<response>} response to the request.
 */
async function createGuest(data) {
  return await this.post(`guest`, {}, data)
}

/**
 * Update a specific guest given its ID.
 * 
 * @param  {string} guestId ID of the guest to update.
 * @param  {object} data The updates to be applied to the guest.
 * @return {Promise<response>} response to the request.
 */
async function updateGuest(guestId, data) {
  return await this.patch(`guest/${guestId}`, {}, data)
}

/**
 * Retrieve a list of bills for a guest.
 * 
 * @param  {string} guestId ID of the guest.
 * @return {Promise<response>} response to the request.
 */
async function getBillsForGuest(guestId) {
  return await this.get(`guest/${guestId}/bill`)
}

/**
 * @module apis/guest
 */
module.exports = {
  getGuests,
  getGuestById,
  createGuest,
  updateGuest,
  getBillsForGuest
}
