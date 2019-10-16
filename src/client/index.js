const Got = require('got')

const Api = require('./api')
const Impala = require('./impala')

const baseUrl = 'https://api.getimpala.com/v2/'

function create(apiKey, hotelId) {
  const client = Got.extend({ baseUrl })
  const api = Api(apiKey, client)
  const impala = Impala(api)
  if (hotelId) {
    return impala.getHotel(hotelId)
  }
  return impala
}

module.exports = {
  create
}
