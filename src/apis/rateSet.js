async function getRateSets(params = {}) {
  return await this.get('rate-set', params)
}

module.exports = {
  getRateSets
}
