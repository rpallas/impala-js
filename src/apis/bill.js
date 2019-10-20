async function getBillById(billId) {
  return await this.get(`bill/${billId}`)
}

async function getChargesForBill(billId) {
  return await this.get(`bill/${billId}/charge`)
}

async function getChargeByIdForBill(billId, chargeId) {
  return await this.get(`bill/${billId}/charge/${chargeId}`)
}

async function createChargeForBill(billId, data) {
  return await this.post(`bill/${billId}/charge`, {}, data)
}

async function refundChargeByIdForBill(billId, chargeId) {
  return await this.post(`bill/${billId}/charge/${chargeId}/refund`)
}

async function getPaymentsForBill(billId) {
  return await this.get(`bill/${billId}/payment`)
}

async function getPaymentByIdForBill(billId, paymentId) {
  return await this.get(`bill/${billId}/payment/${paymentId}`)
}

async function createPaymentForBill(billId, data) {
  return await this.post(`bill/${billId}/payment`, {}, data)
}

async function refundPaymentByIdForBill(billId, paymentId) {
  return await this.post(`bill/${billId}/payment/${paymentId}/refund`)
}

module.exports = {
  getBillById,
  getChargeByIdForBill,
  getChargesForBill,
  createChargeForBill,
  refundChargeByIdForBill,
  getPaymentsForBill,
  getPaymentByIdForBill,
  createPaymentForBill,
  refundPaymentByIdForBill
}
