async function getGuests(params = {}) {
  let { startDate, endDate } = params

  if (!startDate || !endDate) {
    throw new Error('getGuests requires both startDate and endDate')
  }

  params.startDate = this.formatDate(startDate)
  params.endDate = this.formatDate(endDate)

  return await this.get('guest', params)
}

async function getGuestById(guestId) {
  return await this.get(`guest/${guestId}`)
}

async function createGuest(guestId, data) {
  return await this.post(`guest/${guestId}`, {}, data)
}

async function updateGuest(guestId, data) {
  return await this.patch(`guest/${guestId}`, {}, data)
}

async function getBillsForGuest(guestId) {
  return await this.get(`guest/${guestId}/bill`)
}

module.exports = {
  getGuests,
  getGuestById,
  createGuest,
  updateGuest,
  getBillsForGuest
}
