const Api = require('../../src/client/api')
const Hotel = require('../../src/client/hotel')
const Fakes = require('../helpers/fakes')

let mockClient, mockApi

describe('Hotel', () => {
  beforeEach(() => {
    mockClient = {
      get: Fakes.mock(Fakes.responses.OK),
      patch: Fakes.mock(Fakes.responses.OK),
      post: Fakes.mock(Fakes.responses.OK),
      put: Fakes.mock(Fakes.responses.OK)
    }
    mockApi = Api('dummy-token', mockClient)
  })

  it('returns the hotel id', async () => {
    const hotel = Hotel('hotelId', mockApi)

    expect(hotel.id).toEqual('hotelId')
  })

  it('makes GET requests', async () => {
    const hotel = Hotel('hotelId', mockApi)
    await hotel.get('testUrl', 'param1=test')

    expect(mockClient.get.mock.calls[0][0]).toEqual('hotel/hotelId/testUrl')
    expect(mockClient.get.mock.calls[0][1].query).toEqual('param1=test')
  })

  it('makes PATCH requests', async () => {
    const hotel = Hotel('hotelId', mockApi)
    await hotel.patch('testUrl', 'param1=test', { data: 'newData' })

    expect(mockClient.patch.mock.calls[0][0]).toEqual('hotel/hotelId/testUrl')
    expect(mockClient.patch.mock.calls[0][1].query).toEqual('param1=test')
    expect(mockClient.patch.mock.calls[0][1].json).toEqual({ data: 'newData' })
  })

  it('makes POST requests', async () => {
    const hotel = Hotel('hotelId', mockApi)
    await hotel.post('testUrl', 'param1=test', { data: 'newData' })

    expect(mockClient.post.mock.calls[0][0]).toEqual('hotel/hotelId/testUrl')
    expect(mockClient.post.mock.calls[0][1].query).toEqual('param1=test')
    expect(mockClient.post.mock.calls[0][1].json).toEqual({ data: 'newData' })
  })

  it('makes PUT requests', async () => {
    const hotel = Hotel('hotelId', mockApi)
    await hotel.put('testUrl', 'param1=test', { data: 'newData' })

    expect(mockClient.put.mock.calls[0][0]).toEqual('hotel/hotelId/testUrl')
    expect(mockClient.put.mock.calls[0][1].query).toEqual('param1=test')
    expect(mockClient.put.mock.calls[0][1].json).toEqual({ data: 'newData' })
  })
})
