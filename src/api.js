/**
 * @module api
 */

const Path = require('path')

const { version } = require(Path.join(process.cwd(), 'package.json'))
const userAgent = `impala-js/${version}`

/**
 * Handles connection to Impala API.
 * 
 * @param  {string}   apiKey Key to authenticate into Impala API.
 * @param  {function} client Client to make HTTP requests.
 */
function Api(apiKey, client) {
  return {
    /**
     * Makes a request to Impala API.
     *
     * @param {string} method    The HTTP method to use.
     * @param {string} url       The endpoint of the API to call.
     * @param {array}  options   Options to pass in the request.
     * @return {Promise<response>} response to the request.
     */
    makeRequest: async (method, url, options = {}) => {
      options.headers = {
        ...options.headers,
        'User-Agent': userAgent,
        Authorization: `Bearer ${apiKey}`
      }
      try {
        return await client[method.toLowerCase()](url, options)
      } catch (err) {
        throw new Error(`Http Client: ${err}`)
      }
    }
  }
}

module.exports = Api
