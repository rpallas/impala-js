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

  return {
    id,
    get,
    patch,
    post,
    put
  }
}

module.exports = Hotel
