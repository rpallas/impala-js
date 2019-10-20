const Api = require('../src/api')
const Impala = require('../src/impala')

describe('Impala', () => {
  
  describe('getHotel', () => {
    beforeEach(() => {
      mockClient = {}
      mockApi = Api('dummy-token', mockClient)
    })

    it('returns the hotel object', async () => {
      const impala = Impala(mockApi)

      expect(impala.getHotel('hotelId').id).toEqual('hotelId')
    })
  })
})
