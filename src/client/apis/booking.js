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

async function getBookingById(bookingId) {
  return await this.get(`booking/${bookingId}`)
}

async function createBooking(bookingId, data) {
  return await this.post(`booking/${bookingId}`, {}, data)
}

async function updateBookingById(bookingId, data) {
  return await this.patch(`booking/${bookingId}`, {}, data)
}

async function checkInBookingById(bookingId) {
  return await this.post(`booking/${bookingId}/check-in`)
}

async function checkOutBookingById(bookingId) {
  return await this.post(`booking/${bookingId}/check-out`)
}

async function cancelBookingById(bookingId) {
  return await this.post(`booking/${bookingId}/cancel`)
}

async function getGuestsForBooking(bookingId) {
  return await this.get(`booking/${bookingId}/guest`)
}

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
