async function getAllocations(params = []) {
  return await this.get('allocation', params)
}

async function getAllocationById(allocationId) {
  return await this.get(`allocation/${allocationId}`)
}

module.exports = {
  getAllocations,
  getAllocationById
}
