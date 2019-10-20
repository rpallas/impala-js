const Moment = require('moment')

const Apis = require('./apis')

function Hotel(id, api) {

  async function get(endpoint, params) {
    return await request('GET', endpoint, params)
  }

  async function patch(endpoint, params, body) {
    return await request('PATCH', endpoint, params, body)
  }

  async function post(endpoint, params, body) {
    return await request('POST', endpoint, params, body)
  }

  async function put(endpoint, params, body) {
    return await request('PUT', endpoint, params, body)
  }

  async function request(method, endpoint, params, body) {
    const url = `hotel/${id}/${endpoint}`
    const options = {
      query: params
    }
    if (body) {
      options.json = body
    }
    return await api.makeRequest(method, url, options)
  }

  function formatDate (date) {
    return Moment(date).format('YYYY-MM-DD')
  }

  // merging the apis into the hotel object makes them available in the client
  return {
    ...Apis,
    id,
    get,
    patch,
    post,
    put,
    formatDate
  }
}

module.exports = Hotel
