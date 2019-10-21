const Api = require('../../src/api')
const Impala = require('../../src/impala')
const Fakes = require('../helpers/fakes')

let mockClient, hotel

describe('Apis/rate-plan', () => {
  beforeEach(() => {
    mockClient = {
      get: Fakes.mock(Fakes.responses.OK),
      put: Fakes.mock(Fakes.responses.OK)
    }
    hotel = Impala(Api('dummy-token', mockClient)).getHotel('hotelId')
  })

  describe('getRatePlans', () => {
    it('makes a GET request to the correct endpoint', async () => {
      await hotel.getRatePlans()

      expect(mockClient.get.mock.calls[0][0]).toEqual('hotel/hotelId/rate-plan')
    })

    it('includes the params in the query property', async () => {
      const params = { key1: 'a', key2: 'b' }
      await hotel.getRatePlans(params)

      expect(mockClient.get.mock.calls[0][1].query).toEqual(params)
    })
  })

  describe('getRatePlanById', () => {
    it('makes a GET request to the correct endpoint', async () => {
      await hotel.getRatePlanById('123')

      expect(mockClient.get.mock.calls[0][0]).toEqual('hotel/hotelId/rate-plan/123')
    })
  })

  describe('getPriceForRatePlan', () => {
    let params = { startDate: '2019-01-01', endDate: '2019-02-01' }

    it('makes a GET request to the correct endpoint', async () => {
      await hotel.getPriceForRatePlan('123', params)

      expect(mockClient.get.mock.calls[0][0]).toEqual('hotel/hotelId/rate-plan/123/price')
    })
    it('includes the params in the query property', async () => {
      await hotel.getPriceForRatePlan('123', params)

      expect(mockClient.get.mock.calls[0][1].query).toEqual(params)
    })

    it('returns an error if no dates are passed', async () => {
      params = { notA: 'date' }

      await expect(hotel.getPriceForRatePlan('123', params)).rejects.toThrow(
        'requires both startDate and endDate'
      )
    })

    it('returns an error if no params are passed', async () => {
      await expect(hotel.getPriceForRatePlan('123')).rejects.toThrow(
        'requires both startDate and endDate'
      )
    })

    it('returns an error if only startDate is passed', async () => {
      params = { startDate: '2019-01-01' }

      await expect(hotel.getPriceForRatePlan('123', params)).rejects.toThrow(
        'requires both startDate and endDate'
      )
    })

    it('returns an error if only endDate is passed', async () => {
      params = { endDate: '2019-01-01' }

      await expect(hotel.getPriceForRatePlan('123', params)).rejects.toThrow(
        'requires both startDate and endDate'
      )
    })

    it('formats startDate and endDate params', async () => {
      const params = { startDate: '01-01-2019', endDate: '01-02-2019' }
      await hotel.getPriceForRatePlan('123', params)

      expect(mockClient.get.mock.calls[0][1].query.startDate).toEqual('2019-01-01')
      expect(mockClient.get.mock.calls[0][1].query.endDate).toEqual('2019-01-02')
    })
  })

  describe('updatePriceForRatePlan', () => {
    let data = { date: '2019-01-01', amountDescription: 'test' }

    it('makes a GET request to the correct endpoint', async () => {
      await hotel.updatePriceForRatePlan('123', data)

      expect(mockClient.put.mock.calls[0][0]).toEqual('hotel/hotelId/rate-plan/123/price')
    })

    it('includes the params in the query property', async () => {
      await hotel.updatePriceForRatePlan('123', data)

      expect(mockClient.put.mock.calls[0][1].json).toEqual(data)
      expect(mockClient.put.mock.calls[0][1].query).toEqual({})
    })

    it('returns an error if date is not passed', async () => {
      data = { notA: 'date', amountDescription: 'test' }

      await expect(hotel.updatePriceForRatePlan('123', data)).rejects.toThrow(
        'requires a date'
      )
    })

    it('returns an error if amountDescription is not passed', async () => {
      data = { date: '2019-01-01', notAn: 'amountDescription' }

      await expect(hotel.updatePriceForRatePlan('123', data)).rejects.toThrow(
        'requires an amountDescription'
      )
    })

    it('returns an error if data is omitted', async () => {
      await expect(hotel.updatePriceForRatePlan('123')).rejects.toThrow(
        'requires a date'
      )
    })

    it('formats date param', async () => {
      const data = { date: '01-01-2019', amountDescription: 'test' }
      await hotel.updatePriceForRatePlan('123', data)

      expect(mockClient.put.mock.calls[0][1].json.date).toEqual('2019-01-01')
    })
  })
})
