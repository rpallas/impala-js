const Api = require('../../../src/client/api')
const Impala = require('../../../src/client/impala')
const Fakes = require('../../helpers/fakes')

let mockClient, hotel

describe('Apis/extra', () => {
  beforeEach(() => {
    mockClient = {
      get: Fakes.mock(Fakes.responses.OK)
    }
    hotel = Impala(Api('dummy-token', mockClient)).getHotel('hotelId')
  })

  describe('getExtras', () => {
    it('makes a GET request to the correct endpoint', async () => {
      await hotel.getExtras()

      expect(mockClient.get.mock.calls[0][0]).toEqual('hotel/hotelId/extra')
    })

    it('includes the params in the query property', async () => {
      const params = [['key', 'a'], ['key', 'b']]
      await hotel.getExtras(params)

      expect(mockClient.get.mock.calls[0][1].query).toEqual(params)
    })
  })

  describe('getExtraById', () => {
    it('makes a GET request to the correct endpoint', async () => {
      await hotel.getExtraById('123')

      expect(mockClient.get.mock.calls[0][0]).toEqual('hotel/hotelId/extra/123')
    })
  })
})
