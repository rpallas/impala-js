const Path = require('path')

const { version } = require(Path.join(process.cwd(), 'package.json'))
const userAgent = `impala-js/${version}`

function Api(apiKey, client) {
  return {
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
