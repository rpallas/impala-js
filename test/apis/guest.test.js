const Api = require('../../src/api')
const Impala = require('../../src/impala')
const Fakes = require('../helpers/fakes')

let mockClient, hotel

describe('Apis/guest', () => {
  beforeEach(() => {
    mockClient = {
      get: Fakes.mock(Fakes.responses.OK),
      post: Fakes.mock(Fakes.responses.OK),
      patch: Fakes.mock(Fakes.responses.OK)
    }
    hotel = Impala(Api('dummy-token', mockClient)).getHotel('hotelId')
  })

  describe('getGuests', () => {
    let params = { startDate: '2019-01-01', endDate: '2019-02-01' }

    it('makes a GET request to the correct endpoint', async () => {
      await hotel.getGuests(params)

      expect(mockClient.get.mock.calls[0][0]).toEqual('hotel/hotelId/guest')
    })

    it('includes the params in the query property', async () => {
      await hotel.getGuests(params)

      expect(mockClient.get.mock.calls[0][1].query).toEqual(params)
    })

    it('returns an error if no dates are passed', async () => {
      params = { notA: 'date' }

      await expect(hotel.getGuests(params)).rejects.toThrow(
        'requires both startDate and endDate'
      )
    })

    it('returns an error if only startDate is passed', async () => {
      params = { startDate: '2019-01-01' }

      await expect(hotel.getGuests(params)).rejects.toThrow(
        'requires both startDate and endDate'
      )
    })

    it('returns an error if only endDate is passed', async () => {
      params = { endDate: '2019-01-01' }

      await expect(hotel.getGuests(params)).rejects.toThrow(
        'requires both startDate and endDate'
      )
    })

    it('formats startDate and endDate params', async () => {
      const params = { startDate: '01-01-2019', endDate: '01-02-2019' }
      await hotel.getGuests(params)

      expect(mockClient.get.mock.calls[0][1].query.startDate).toEqual('2019-01-01')
      expect(mockClient.get.mock.calls[0][1].query.endDate).toEqual('2019-01-02')
    })
  })

  describe('getGuestById', () => {
    it('makes a GET request to the correct endpoint', async () => {
      await hotel.getGuestById('123')

      expect(mockClient.get.mock.calls[0][0]).toEqual('hotel/hotelId/guest/123')
    })
  })

  describe('createGuest', () => {
    const guestData = { parentId: 123456, reference: 'reference' }

    it('makes a GET request to the correct endpoint', async () => {
      await hotel.createGuest('123', guestData)

      expect(mockClient.post.mock.calls[0][0]).toEqual('hotel/hotelId/guest/123')
    })

    it('passes the data correctly', async () => {
      await hotel.createGuest('123', guestData)

      expect(mockClient.post.mock.calls[0][1].json).toEqual(guestData)
      expect(mockClient.post.mock.calls[0][1].query).toEqual({})
    })
  })

  describe('updateGuest', () => {
    const guestData = { start: 123456, roomIds: ['abc', 'cde'] }

    it('makes a GET request to the correct endpoint', async () => {
      await hotel.updateGuest('123', guestData)

      expect(mockClient.patch.mock.calls[0][0]).toEqual('hotel/hotelId/guest/123')
    })

    it('passes the data correctly', async () => {
      await hotel.updateGuest('123', guestData)

      expect(mockClient.patch.mock.calls[0][1].json).toEqual(guestData)
      expect(mockClient.patch.mock.calls[0][1].query).toEqual({})
    })
  })

  describe('getBillsForGuest', () => {
    it('makes a GET request to the correct endpoint', async () => {
      await hotel.getBillsForGuest('123')

      expect(mockClient.get.mock.calls[0][0]).toEqual('hotel/hotelId/guest/123/bill')
    })
  })
})
