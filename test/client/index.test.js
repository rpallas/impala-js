const Index = require('../../src/client')

describe('Index', () => {
  
  describe('Create', () => {
    
    describe('With hotelId', () => {
      it('returns the hotel object', async () => {
        const hotel = Index.create('apiKey', 'hotelId')

        expect(hotel.id).toEqual('hotelId')
      })
    })
    
    describe('Without hotelId', () => {
      it('returns the impala object', async () => {
        const api = Index.create('apiKey')

        expect(api.getHotel).not.toBeUndefined()
      })
    })
  })
})
