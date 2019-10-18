async function getExtras(params = []) {
  return await this.get('extra', params)
}

async function getExtraById(extraId) {
  return await this.get(`extra/${extraId}`)
}

module.exports = {
  getExtras,
  getExtraById
}
