async function getBookingSets(params = {}) {
  return await this.get('booking-set', params)
}

async function getBookingSetById(bookingSetId) {
  return await this.get(`booking-set/${bookingSetId}`)
}

async function createBookingSet(bookingSetId, data) {
  return await this.post(`booking-set/${bookingSetId}`, {}, data)
}

async function updateBookingSet(bookingSetId, data) {
  return await this.patch(`booking-set/${bookingSetId}`, {}, data)
}

module.exports = {
  getBookingSets,
  getBookingSetById,
  createBookingSet,
  updateBookingSet
}
