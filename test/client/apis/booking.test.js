const Api = require('../../../src/client/api')
const Impala = require('../../../src/client/impala')
const Fakes = require('../../helpers/fakes')

let mockClient, hotel

describe('Apis/booking', () => {
  beforeEach(() => {
    mockClient = {
      get: Fakes.mock(Fakes.responses.OK),
      post: Fakes.mock(Fakes.responses.OK),
      patch: Fakes.mock(Fakes.responses.OK)
    }
    hotel = Impala(Api('dummy-token', mockClient)).getHotel('hotelId')
  })

  describe('getBookings', () => {
    it('makes a GET request to the correct endpoint', async () => {
      await hotel.getBookings()

      expect(mockClient.get.mock.calls[0][0]).toEqual('hotel/hotelId/booking')
    })

    it('includes the params in the query property', async () => {
      const params = { key1: 'a', key2: 'b' }
      await hotel.getBookings(params)

      expect(mockClient.get.mock.calls[0][1].query).toEqual(params)
    })

    it('returns an error when startDate is passed without endDate', async () => {
      const params = { startDate: '2019-01-01' }

      await expect(hotel.getBookings(params)).rejects.toThrow(
        'requires both startDate and endDate (or neither)'
      )
    })

    it('returns an error when endDate is passed without startDate', async () => {
      const params = { endDate: '2019-01-01' }

      await expect(hotel.getBookings(params)).rejects.toThrow(
        'requires both startDate and endDate (or neither)'
      )
    })

    it('works when both endDate and startDate are passed', async () => {
      const params = { startDate: '2019-01-01', endDate: '2019-02-01' }
      await hotel.getBookings(params)

      expect(mockClient.get.mock.calls[0][1].query).toEqual(params)
    })

    it('formats startDate and endDate params', async () => {
      const params = { startDate: '01-01-2019', endDate: '01-02-2019' }
      await hotel.getBookings(params)

      expect(mockClient.get.mock.calls[0][1].query.startDate).toEqual('2019-01-01')
      expect(mockClient.get.mock.calls[0][1].query.endDate).toEqual('2019-01-02')
    })
  })

  describe('getBookingById', () => {
    it('makes a GET request to the correct endpoint', async () => {
      await hotel.getBookingById('123')

      expect(mockClient.get.mock.calls[0][0]).toEqual('hotel/hotelId/booking/123')
    })
  })

  describe('createBooking', () => {
    const bookingData = { ratePlanId: 1, adultCount: 1 }

    it('makes a GET request to the correct endpoint', async () => {
      await hotel.createBooking('123', bookingData)

      expect(mockClient.post.mock.calls[0][0]).toEqual('hotel/hotelId/booking/123')
    })

    it('passes the data correctly', async () => {
      await hotel.createBooking('123', bookingData)

      expect(mockClient.post.mock.calls[0][1].json).toEqual(bookingData)
      expect(mockClient.post.mock.calls[0][1].query).toEqual({})
    })
  })

  describe('updateBookingById', () => {
    const bookingData = { start: 123456, roomIds: ['abc', 'cde'] }

    it('makes a GET request to the correct endpoint', async () => {
      await hotel.updateBookingById('123', bookingData)

      expect(mockClient.patch.mock.calls[0][0]).toEqual('hotel/hotelId/booking/123')
    })

    it('passes the data correctly', async () => {
      await hotel.updateBookingById('123', bookingData)

      expect(mockClient.patch.mock.calls[0][1].json).toEqual(bookingData)
      expect(mockClient.patch.mock.calls[0][1].query).toEqual({})
    })
  })

  describe('checkInBookingById', () => {
    it('makes a GET request to the correct endpoint', async () => {
      await hotel.checkInBookingById('123')

      expect(mockClient.post.mock.calls[0][0]).toEqual('hotel/hotelId/booking/123/check-in')
    })
  })

  describe('checkOutBookingById', () => {
    it('makes a GET request to the correct endpoint', async () => {
      await hotel.checkOutBookingById('123')

      expect(mockClient.post.mock.calls[0][0]).toEqual('hotel/hotelId/booking/123/check-out')
    })
  })

  describe('cancelBookingById', () => {
    it('makes a GET request to the correct endpoint', async () => {
      await hotel.cancelBookingById('123')

      expect(mockClient.post.mock.calls[0][0]).toEqual('hotel/hotelId/booking/123/cancel')
    })
  })

  describe('getGuestsForBooking', () => {
    it('makes a GET request to the correct endpoint', async () => {
      await hotel.getGuestsForBooking('123')

      expect(mockClient.get.mock.calls[0][0]).toEqual('hotel/hotelId/booking/123/guest')
    })
  })

  describe('getBillsForBooking', () => {
    it('makes a GET request to the correct endpoint', async () => {
      await hotel.getBillsForBooking('123')

      expect(mockClient.get.mock.calls[0][0]).toEqual('hotel/hotelId/booking/123/bill')
    })
  })
})
