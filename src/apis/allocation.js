/**
 * Get all allocations.
 * 
 * @param  {object} params={} Optional params to be passed to request.
 * @return {Promise<response>} response to the request.
 */
async function getAllocations(params = {}) {
  return await this.get('allocation', params)
}

/**
 * Get a specific allocation given its ID.
 * 
 * @param  {string} allocationId ID of the allocation to retrieve.
 * @return {Promise<response>} response to the request.
 */
async function getAllocationById(allocationId) {
  return await this.get(`allocation/${allocationId}`)
}

/**
 * @module apis/allocation
 */
module.exports = {
  getAllocations,
  getAllocationById
}
