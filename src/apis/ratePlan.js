async function getRatePlans(params = {}) {
  return await this.get('rate-plan', params)
}

async function getRatePlanById(ratePlanId) {
  return await this.get(`rate-plan/${ratePlanId}`)
}

async function getPriceForRatePlan(ratePlanId, params = {}) {
  let { startDate, endDate } = params

  if (!startDate || !endDate) {
    throw new Error('getPriceForRatePlan requires both startDate and endDate')
  }

  params.startDate = this.formatDate(startDate)
  params.endDate = this.formatDate(endDate)

  return await this.get(`rate-plan/${ratePlanId}/price`, params)
}

async function updatePriceForRatePlan(ratePlanId, data = {}) {
  let { date, amountDescription } = data

  if (!date) {
    throw new Error('updatePriceForRatePlan requires a date')
  }

  if (!amountDescription) {
    throw new Error('updatePriceForRatePlan requires an amountDescription')
  }

  data.date = this.formatDate(date)

  return await this.put(`rate-plan/${ratePlanId}/price`, {}, data)
}

module.exports = {
  getRatePlans,
  getRatePlanById,
  getPriceForRatePlan,
  updatePriceForRatePlan
}
