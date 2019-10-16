function Api(apiKey, client) {
  return {
    makeRequest: async (method, url, options = {}) => {
      options.headers = {
        ...options.headers,
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
