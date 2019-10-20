/**
 * Get a specific bill given its ID.
 * 
 * @param  {string} billId ID of the bill to retrieve.
 * @return {Promise<response>} response to the request.
 */
async function getBillById(billId) {
  return await this.get(`bill/${billId}`)
}

/**
 * Get all charges for a specific bill.
 * 
 * @param  {string} billId ID of the bill.
 * @return {Promise<response>} response to the request.
 */
async function getChargesForBill(billId) {
  return await this.get(`bill/${billId}/charge`)
}

/**
 * Get a specific charge for a specific bill given its IDs.
 * 
 * @param  {string} billId ID of the bill.
 * @param  {string} chargeId ID of the charge.
 * @return {Promise<response>} response to the request.
 */
async function getChargeByIdForBill(billId, chargeId) {
  return await this.get(`bill/${billId}/charge/${chargeId}`)
}

/**
 * Create a new charge for a specific bill.
 * 
 * @param  {string} billId ID of the bill.
 * @param  {object} data The data to create the new charge.
 * @return {Promise<response>} response to the request.
 */
async function createChargeForBill(billId, data) {
  return await this.post(`bill/${billId}/charge`, {}, data)
}

/**
 * Refund a specific charge for a specific bill.
 * 
 * @param  {string} billId ID of the bill.
 * @param  {string} chargeId ID of the charge to refund.
 * @return {Promise<response>} response to the request.
 */
async function refundChargeByIdForBill(billId, chargeId) {
  return await this.post(`bill/${billId}/charge/${chargeId}/refund`)
}

/**
 * Get all payments for a specific bill.
 * 
 * @param  {string} billId ID of the bill.
 * @return {Promise<response>} response to the request.
 */
async function getPaymentsForBill(billId) {
  return await this.get(`bill/${billId}/payment`)
}

/**
 * Get a specific payment for a specific bill given both IDs.
 * 
 * @param  {string} billId ID of the bill.
 * @param  {string} paymentId ID of the payment.
 * @return {Promise<response>} response to the request.
 */
async function getPaymentByIdForBill(billId, paymentId) {
  return await this.get(`bill/${billId}/payment/${paymentId}`)
}

/**
 * Create a new payment for a specific bill.
 * 
 * @param  {string} billId ID of the bill.
 * @param  {object} data The data to create the new payment.
 * @return {Promise<response>} response to the request.
 */
async function createPaymentForBill(billId, data) {
  return await this.post(`bill/${billId}/payment`, {}, data)
}

/**
 * Refund a specific payment for a specific bill.
 * 
 * @param  {string} billId ID of the bill.
 * @param  {string} paymentId ID of the payment to refund.
 * @return {Promise<response>} response to the request.
 */
async function refundPaymentByIdForBill(billId, paymentId) {
  return await this.post(`bill/${billId}/payment/${paymentId}/refund`)
}

/**
 * @module apis/bill
 */
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
