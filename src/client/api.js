module.exports = function Api(apiKey, client) {
  return {
    makeRequest: async (method, url, options = {}) => {
      options.headers = {
        ...options.headers,
        Authorization: `Bearer ${apiKey}`
      };
      return await client[method.toLowerCase()](url, options);
    }
  };
};
