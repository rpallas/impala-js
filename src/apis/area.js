/**
 * @module apis/area
 */

/**
 * Get all areas.
 * 
 * @param  {object} params={} Optional params to be passed to request.
 * @return {Promise<response>} response to the request.
 */
async function getAreas(params = {}) {
  return await this.get('area', params)
}

/**
 * Get a specific area given its ID.
 * 
 * @param  {string} areaId ID of the area to retrieve.
 * @return {Promise<response>} response to the request.
 */
async function getAreaById(areaId) {
  return await this.get(`area/${areaId}`)
}

module.exports = {
  getAreas,
  getAreaById
}
