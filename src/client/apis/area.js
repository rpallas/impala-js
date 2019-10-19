async function getAreas(params = {}) {
  return await this.get('area', params)
}

async function getAreaById(areaId) {
  return await this.get(`area/${areaId}`)
}

module.exports = {
  getAreas,
  getAreaById
}
