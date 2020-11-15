/**
 * @module api
 */

const Path = require('path')

/**
 * Handles connection to Impala API.
 *
 * @param  {string}   apiKey  Key to authenticate into Impala API.
 * @param  {function} client  Client to make HTTP requests.
 * @param  {object}   config  Configuration options.
 */
function Api(apiKey, client, config = {}) {
  let userAgent;
  if(config.useragent !== false) {
    userAgent = config.useragent ? `${getUserAgent()} ${config.useragent}` : getUserAgent()
  }

  function getUserAgent() {
    const { name, version } = require(Path.join(process.cwd(), 'package.json'))
    return `${name}/${version}`
  }

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
        Authorization: `Bearer ${apiKey}`
      }
      if(userAgent) {
        options.headers['User-Agent'] = userAgent
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
