/**
 * @module hotel
 */

const Moment = require('moment')

const Apis = require('./apis')

/**
 * @param  {string} id The hotel ID
 * @param  {api} api
 */
function Hotel(id, api) {

  /**
   * Makes a GET request to the hotel endpoint of the Impala API.
   *
   * @param {string} endpoint The endpoint of the API to call.
   * @param {array}  params   Optional parameters to be passed in the request.
   * @return {Promise<response>} response to the request.
   */
  async function get(endpoint, params) {
    return await _request('GET', endpoint, params)
  }

  /**
   * Makes a PATCH request to the hotel endpoint of the Impala API.
   *
   * @param {string} endpoint The endpoint of the API to call.
   * @param {array}  params   Optional parameters to be passed in the request.
   * @param {array}  body     The request body to be sent as JSON.
   * @return {Promise<response>} response to the request.
   */
  async function patch(endpoint, params, body) {
    return await _request('PATCH', endpoint, params, body)
  }

  /**
   * Makes a POST request to the hotel endpoint of the Impala API.
   *
   * @param {string} endpoint The endpoint of the API to call.
   * @param {array}  params   Optional parameters to be passed in the request.
   * @param {array}  body     The request body to be sent as JSON.
   * @return {Promise<response>} response to the request.
   */
  async function post(endpoint, params, body) {
    return await _request('POST', endpoint, params, body)
  }

  /**
   * Makes a PUT request to the hotel endpoint of the Impala API.
   *
   * @param {string} endpoint The endpoint of the API to call.
   * @param {array}  params   Optional parameters to be passed in the request.
   * @param {array}  body     The request body to be sent as JSON.
   * @return {Promise<response>} response to the request.
   */
  async function put(endpoint, params, body) {
    return await _request('PUT', endpoint, params, body)
  }

  
  /**
   * Arranges the query params and json body then makes the 
   * api request.
   * @param  {string} method   HTTP method.
   * @param  {string} endpoint The endpoint of the API to call.
   * @param  {object} params   Optional parameters to be passed in the request.
   * @param  {object} body     The request body to be sent as JSON.
   * @return {Promise<response>} response to the request.
   */
  async function _request(method, endpoint, params, body) {
    const url = `hotel/${id}/${endpoint}`
    const options = {
      query: params
    }
    if (body) {
      options.json = body
    }
    return await api.makeRequest(method, url, options)
  }

  /**
   * Formats a date input.
   *
   * @param  {string} date The date input string.
   * @return {string} The formatted date.
   */
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
