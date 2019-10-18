const Api = require('../../../src/client/api')
const Impala = require('../../../src/client/impala')
const Fakes = require('../../helpers/fakes')

let mockClient, hotel

describe('Apis/areaType', () => {
  beforeEach(() => {
    mockClient = {
      get: Fakes.mock(Fakes.responses.OK)
    }
    hotel = Impala(Api('dummy-token', mockClient)).getHotel('hotelId')
  })

  describe('getAreaTypes', () => {
    it('makes a GET request to the correct endpoint', async () => {
      await hotel.getAreaTypes()

      expect(mockClient.get.mock.calls[0][0]).toEqual('hotel/hotelId/area-type')
    })

    it('includes the params in the query property', async () => {
      const params = [['key', 'a'], ['key', 'b']]
      await hotel.getAreaTypes(params)

      expect(mockClient.get.mock.calls[0][1].query).toEqual(params)
    })
  })

  describe('getAreaTypeById', () => {
    it('makes a GET request to the correct endpoint', async () => {
      await hotel.getAreaTypeById('123')

      expect(mockClient.get.mock.calls[0][0]).toEqual('hotel/hotelId/area-type/123')
    })
  })
})
