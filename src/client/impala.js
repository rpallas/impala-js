const Hotel = require('./hotel');

function Impala(api) {
  return {
    getHotel: (hotelId) => {
      return Hotel(hotelId, api)
    }
  };
}

module.exports = Impala
