const Api = require('../../../src/client/api')
const Impala = require('../../../src/client/impala')
const Fakes = require('../../helpers/fakes')

let mockClient, hotel

describe('Apis/rate-price', () => {
  beforeEach(() => {
    mockClient = {
      get: Fakes.mock(Fakes.responses.OK),
      put: Fakes.mock(Fakes.responses.OK)
    }
    hotel = Impala(Api('dummy-token', mockClient)).getHotel('hotelId')
  })

  describe('getRatePrices', () => {
    it('makes a GET request to the correct endpoint', async () => {
      await hotel.getRatePrices()

      expect(mockClient.get.mock.calls[0][0]).toEqual('hotel/hotelId/rate/price')
    })

    it('includes the params in the query property', async () => {
      const params = { key1: 'a', key2: 'b' }
      await hotel.getRatePrices(params)

      expect(mockClient.get.mock.calls[0][1].query).toEqual(params)
    })

    it('calls the correct endpoint when rateId is passed', async () => {
      const params = { rateId: '123' }
      await hotel.getRatePrices(params)

      expect(mockClient.get.mock.calls[0][0]).toEqual('hotel/hotelId/rate/123/price')
    })

    it('calls the correct endpoint when roomTypeId is passed', async () => {
      const params = { roomTypeId: '123' }
      await hotel.getRatePrices(params)

      expect(mockClient.get.mock.calls[0][0]).toEqual('hotel/hotelId/rate/price')
      expect(mockClient.get.mock.calls[0][1].query).toEqual(params)
    })

    it('returns an error when startDate is passed without endDate', async () => {
      const params = { startDate: '2019-01-01' }

      await expect(hotel.getRatePrices(params)).rejects.toThrow(
        'requires both startDate and endDate (or neither)'
      )
    })

    it('returns an error when endDate is passed without startDate', async () => {
      const params = { endDate: '2019-01-01' }

      await expect(hotel.getRatePrices(params)).rejects.toThrow(
        'requires both startDate and endDate (or neither)'
      )
    })

    it('works when both endDate and startDate are passed', async () => {
      const params = { startDate: '2019-01-01', endDate: '2019-02-01' }
      await hotel.getRatePrices(params)

      expect(mockClient.get.mock.calls[0][1].query).toEqual(params)
    })

    it('formats startDate and endDate params', async () => {
      const params = { startDate: '01-01-2019', endDate: '01-02-2019' }
      await hotel.getRatePrices(params)

      expect(mockClient.get.mock.calls[0][1].query.startDate).toEqual('2019-01-01')
      expect(mockClient.get.mock.calls[0][1].query.endDate).toEqual('2019-01-02')
    })
  })
})
