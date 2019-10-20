/**
 * Get all rate plans for a hotel.
 * 
 * @param  {object} params={} Optional params to be passed to request.
 * @return {Promise<response>} response to the request.
 */
async function getRatePlans(params = {}) {
  return await this.get('rate-plan', params)
}

/**
 * Get a specific rate plan given its ID.
 * 
 * @param  {string} ratePlanId ID of the rate plan to retrieve.
 * @return {Promise<response>} response to the request.
 */
async function getRatePlanById(ratePlanId) {
  return await this.get(`rate-plan/${ratePlanId}`)
}

/**
 * Get the price of a rate plan.
 * 
 * @param  {string} ratePlanId ID of the rate plan.
 * @param  {object} params={} Params to be passed to request.
 * @return {Promise<response>} response to the request.
 */
async function getPriceForRatePlan(ratePlanId, params = {}) {
  let { startDate, endDate } = params

  if (!startDate || !endDate) {
    throw new Error('getPriceForRatePlan requires both startDate and endDate')
  }

  params.startDate = this.formatDate(startDate)
  params.endDate = this.formatDate(endDate)

  return await this.get(`rate-plan/${ratePlanId}/price`, params)
}

/**
 * Update the price of a rate plan.
 * 
 * @param  {string} ratePlanId ID of the rate plan to update.
 * @param  {object} data={} The updates to be applied to the rate plan.
 * @return {Promise<response>} response to the request.
 */
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

/**
 * @module apis/ratePlan
 */
module.exports = {
  getRatePlans,
  getRatePlanById,
  getPriceForRatePlan,
  updatePriceForRatePlan
}
