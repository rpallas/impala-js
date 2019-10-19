async function getAreaTypes(params = {}) {
  return await this.get('area-type', params)
}

async function getAreaTypeById(areaTypeId) {
  return await this.get(`area-type/${areaTypeId}`)
}

module.exports = {
  getAreaTypes,
  getAreaTypeById
}
