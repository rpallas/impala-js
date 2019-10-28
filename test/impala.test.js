const Api = require('../src/api')
const Impala = require('../src/impala')
const Fakes = require('./helpers/fakes')


describe('Impala', () => {

  let mockClient, mockApi

  beforeEach(() => {
    mockClient = {
      get: Fakes.mock(Fakes.responses.OK),
      patch: Fakes.mock(Fakes.responses.OK),
      post: Fakes.mock(Fakes.responses.OK),
      put: Fakes.mock(Fakes.responses.OK)
    }
    mockApi = Api('dummy-token', mockClient)
  })
  
  describe('getHotel', () => {

    it('returns the hotel object', async () => {
      const impala = Impala(mockApi)

      expect(impala.getHotel('hotelId').id).toEqual('hotelId')
    })
  })

  describe('multiple hotels', () => {

    it('makes requests to the correct hotels', async () => {
      const impala = Impala(mockApi)
      const hotelOne = impala.getHotel('hotelIdOne')
      const hotelTwo = impala.getHotel('hotelIdTwo')
      const hotelThree = impala.getHotel('hotelIdThree')

      await hotelOne.get('testUrlOne', { key: 'one' } )
      await hotelTwo.get('testUrlTwo', { key: 'two' } )
      await hotelThree.get('testUrlThree', { key: 'three' } )

      expect(mockClient.get.mock.calls[0][0]).toEqual('hotel/hotelIdOne/testUrlOne')
      expect(mockClient.get.mock.calls[0][1].query.key).toEqual('one')

      expect(mockClient.get.mock.calls[1][0]).toEqual('hotel/hotelIdTwo/testUrlTwo')
      expect(mockClient.get.mock.calls[1][1].query.key).toEqual('two')

      expect(mockClient.get.mock.calls[2][0]).toEqual('hotel/hotelIdThree/testUrlThree')
      expect(mockClient.get.mock.calls[2][1].query.key).toEqual('three')
    })
  })

})
