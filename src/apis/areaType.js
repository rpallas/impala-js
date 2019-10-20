/**
 * Get all area types.
 * 
 * @param  {object} params={} Optional params to be passed to request.
 * @return {Promise<response>} response to the request.
 */
async function getAreaTypes(params = {}) {
  return await this.get('area-type', params)
}

/**
 * Get a specific area type given its ID.
 * 
 * @param  {string} areaTypeId ID of the area type to retrieve.
 * @return {Promise<response>} response to the request.
 */
async function getAreaTypeById(areaTypeId) {
  return await this.get(`area-type/${areaTypeId}`)
}

/**
 * @module apis/areaType
 */
module.exports = {
  getAreaTypes,
  getAreaTypeById
}
