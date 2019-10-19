const Api = require('../../../src/client/api')
const Impala = require('../../../src/client/impala')
const Fakes = require('../../helpers/fakes')

let mockClient, hotel

describe('Apis/bookingSet', () => {
  beforeEach(() => {
    mockClient = {
      get: Fakes.mock(Fakes.responses.OK),
      post: Fakes.mock(Fakes.responses.OK),
      patch: Fakes.mock(Fakes.responses.OK)
    }
    hotel = Impala(Api('dummy-token', mockClient)).getHotel('hotelId')
  })

  describe('getBookingSets', () => {
    it('makes a GET request to the correct endpoint', async () => {
      await hotel.getBookingSets()

      expect(mockClient.get.mock.calls[0][0]).toEqual('hotel/hotelId/booking-set')
    })

    it('includes the params in the query property', async () => {
      const params = [['key', 'a'], ['key', 'b']]
      await hotel.getBookingSets(params)

      expect(mockClient.get.mock.calls[0][1].query).toEqual(params)
    })
  })

  describe('getBookingSetById', () => {
    it('makes a GET request to the correct endpoint', async () => {
      await hotel.getBookingSetById('123')

      expect(mockClient.get.mock.calls[0][0]).toEqual('hotel/hotelId/booking-set/123')
    })
  })

  describe('createBookingSet', () => {
    const bookingSetData = { grossAmount: 123456, reference: 'reference' }
    it('makes a GET request to the correct endpoint', async () => {
      await hotel.createBookingSet('123', bookingSetData)
      
      expect(mockClient.post.mock.calls[0][0]).toEqual('hotel/hotelId/booking-set/123')
    })
    
    it('passes the data correctly', async () => {
      await hotel.createBookingSet('123', bookingSetData)
      
      expect(mockClient.post.mock.calls[0][1].json).toEqual(bookingSetData)
      expect(mockClient.post.mock.calls[0][1].query).toEqual({})
    })
  })

  describe('updateBookingSet', () => {
    const bookingSetData = { grossAmount: 123456, reference: 'reference' }
    it('makes a GET request to the correct endpoint', async () => {
      await hotel.updateBookingSet('123', bookingSetData)
      
      expect(mockClient.patch.mock.calls[0][0]).toEqual('hotel/hotelId/booking-set/123')
    })
    
    it('passes the data correctly', async () => {
      await hotel.updateBookingSet('123', bookingSetData)
      
      expect(mockClient.patch.mock.calls[0][1].json).toEqual(bookingSetData)
      expect(mockClient.patch.mock.calls[0][1].query).toEqual({})
    })
  })
})
