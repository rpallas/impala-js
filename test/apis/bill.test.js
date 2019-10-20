const Api = require('../../src/api')
const Impala = require('../../src/impala')
const Fakes = require('../helpers/fakes')

let mockClient, hotel

describe('Apis/area', () => {
  beforeEach(() => {
    mockClient = {
      get: Fakes.mock(Fakes.responses.OK),
      post: Fakes.mock(Fakes.responses.OK)
    }
    hotel = Impala(Api('dummy-token', mockClient)).getHotel('hotelId')
  })

  describe('getBillById', () => {
    it('makes a GET request to the correct endpoint', async () => {
      await hotel.getBillById('123')

      expect(mockClient.get.mock.calls[0][0]).toEqual('hotel/hotelId/bill/123')
    })
  })

  describe('getChargesForBill', () => {
    it('makes a GET request to the correct endpoint', async () => {
      await hotel.getChargesForBill('123')

      expect(mockClient.get.mock.calls[0][0]).toEqual('hotel/hotelId/bill/123/charge')
    })
  })

  describe('getChargeByIdForBill', () => {
    it('makes a GET request to the correct endpoint', async () => {
      await hotel.getChargeByIdForBill('123', '456')

      expect(mockClient.get.mock.calls[0][0]).toEqual('hotel/hotelId/bill/123/charge/456')
    })
  })

  describe('createChargeForBill', () => {
    const chargeData = { grossAmount: 123456, taxRate: 0.5 }
    it('makes a GET request to the correct endpoint', async () => {
      await hotel.createChargeForBill('123', chargeData)

      expect(mockClient.post.mock.calls[0][0]).toEqual('hotel/hotelId/bill/123/charge')
    })

    it('passes the data correctly', async () => {
      await hotel.createChargeForBill('123', chargeData)

      expect(mockClient.post.mock.calls[0][1].json).toEqual(chargeData)
      expect(mockClient.post.mock.calls[0][1].query).toEqual({})
    })
  })

  describe('refundChargeByIdForBill', () => {
    it('makes a GET request to the correct endpoint', async () => {
      await hotel.refundChargeByIdForBill('123', '456')

      expect(mockClient.post.mock.calls[0][0]).toEqual('hotel/hotelId/bill/123/charge/456/refund')
    })
  })

  describe('getPaymentsForBill', () => {
    it('makes a GET request to the correct endpoint', async () => {
      await hotel.getPaymentsForBill('123')

      expect(mockClient.get.mock.calls[0][0]).toEqual('hotel/hotelId/bill/123/payment')
    })
  })

  describe('getPaymentByIdForBill', () => {
    it('makes a GET request to the correct endpoint', async () => {
      await hotel.getPaymentByIdForBill('123', '456')

      expect(mockClient.get.mock.calls[0][0]).toEqual('hotel/hotelId/bill/123/payment/456')
    })
  })
  
  describe('createPaymentForBill', () => {
    const paymentData = { grossAmount: 123456, taxRate: 0.5 }
    it('makes a GET request to the correct endpoint', async () => {
      await hotel.createPaymentForBill('123', paymentData)
      
      expect(mockClient.post.mock.calls[0][0]).toEqual('hotel/hotelId/bill/123/payment')
    })
    
    it('passes the data correctly', async () => {
      await hotel.createPaymentForBill('123', paymentData)
      
      expect(mockClient.post.mock.calls[0][1].json).toEqual(paymentData)
      expect(mockClient.post.mock.calls[0][1].query).toEqual({})
    })
  })
  
  describe('refundPaymentByIdForBill', () => {
    it('makes a GET request to the correct endpoint', async () => {
      await hotel.refundPaymentByIdForBill('123', '456')

      expect(mockClient.post.mock.calls[0][0]).toEqual('hotel/hotelId/bill/123/payment/456/refund')
    })
  })
})
