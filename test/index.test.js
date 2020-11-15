const Index = require('../src')

describe('Index', () => {

  describe('Create', () => {

    describe('Without config', () => {
      it('returns the impala object', async () => {
        const api = Index.create('apiKey')

        expect(api.getHotel).not.toBeUndefined()
      })
    })

    describe('With config', () => {
      describe('as string (hotelId)', () => {
        it('returns the hotel object', async () => {
          const hotel = Index.create('apiKey', 'hotelId')

          expect(hotel.id).toEqual('hotelId')
        })
      })

      describe('as object', () => {
        describe('with hotelId', () => {
          it('returns the hotel object', async () => {
            const hotel = Index.create('apiKey', 'hotelId')

            expect(hotel.id).toEqual('hotelId')
          })
        })

        describe('without hotelId', () => {
          it('returns the impala object', async () => {
            const api = Index.create('apiKey')

            expect(api.getHotel).not.toBeUndefined()
          })
        })
      })
    })
  })
})
