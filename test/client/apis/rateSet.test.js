const Api = require('../../../src/client/api')
const Impala = require('../../../src/client/impala')
const Fakes = require('../../helpers/fakes')

let mockClient, hotel

describe('Apis/rateSets', () => {
  beforeEach(() => {
    mockClient = {
      get: Fakes.mock(Fakes.responses.OK)
    }
    hotel = Impala(Api('dummy-token', mockClient)).getHotel('hotelId')
  })

  describe('getRateSets', () => {
    it('makes a GET request to the correct endpoint', async () => {
      await hotel.getRateSets()

      expect(mockClient.get.mock.calls[0][0]).toEqual('hotel/hotelId/rate-set')
    })

    it('includes the params in the query property', async () => {
      const params = { key1: 'a', key2: 'b'}
      await hotel.getRateSets(params)

      expect(mockClient.get.mock.calls[0][1].query).toEqual(params)
    })
  })

})
