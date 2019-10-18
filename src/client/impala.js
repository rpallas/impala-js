const Hotel = require('./hotel')

function Impala(api) {
  return {
    getHotel: hotelId => {
      return new Hotel(hotelId, api)
    }
  }
}

module.exports = Impala
