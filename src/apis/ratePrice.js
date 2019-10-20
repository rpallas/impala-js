async function getRatePrices(params = {}) {
  let { startDate, endDate, rateId } = params

  // xor
  if (!startDate != !endDate) {
    throw new Error('getBookings requires both startDate and endDate (or neither)')
  }

  if (startDate) {
    params.startDate = this.formatDate(startDate)
    params.endDate = this.formatDate(endDate)
  }

  let routeParts = ['rate']
  if (rateId) {
    routeParts.push(rateId)
  }
  routeParts.push('price')

  return await this.get(routeParts.join('/'), params)
}

module.exports = {
  getRatePrices
}
