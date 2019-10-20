const Api = require('../../src/api')
const Impala = require('../../src/impala')
const Fakes = require('../helpers/fakes')

let mockClient, hotel

describe('Apis/allocation', () => {
  beforeEach(() => {
    mockClient = {
      get: Fakes.mock(Fakes.responses.OK)
    }
    hotel = Impala(Api('dummy-token', mockClient)).getHotel('hotelId')
  })

  describe('getAllocations', () => {
    it('makes a GET request to the correct endpoint', async () => {
      await hotel.getAllocations()

      expect(mockClient.get.mock.calls[0][0]).toEqual('hotel/hotelId/allocation')
    })

    it('includes the params in the query property', async () => {
      const params = { key1: 'a', key2: 'b'}
      await hotel.getAllocations(params)

      expect(mockClient.get.mock.calls[0][1].query).toEqual(params)
    })
  })

  describe('getAllocationById', () => {
    it('makes a GET request to the correct endpoint', async () => {
      await hotel.getAllocationById('123')

      expect(mockClient.get.mock.calls[0][0]).toEqual('hotel/hotelId/allocation/123')
    })
  })
})
