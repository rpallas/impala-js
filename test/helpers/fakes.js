const responses = {
  OK: [{ statusCode: 200 }],
  badRequest: [{ statusCode: 400, error: 'Bad Request', message: 'you made a mistake' }],
  unauthorized: [{ statusCode: 401, error: 'Unauthorized', message: 'who are you?' }],
  forbidden: [{ statusCode: 401, error: 'Forbidden', message: "you're not allowed to do that!" }],
  notFound: [{ statusCode: 404, error: 'Not Found', message: "that's not here" }],
  badImplementation: [
    {
      statusCode: 500,
      error: 'Internal Server Error',
      message: 'An internal server error occurred'
    }
  ],
  serviceUnavailable: [
    { statusCode: 503, error: 'Service Unavailable', message: 'try again later' }
  ],
  badGateway: [{ statusCode: 502, error: 'Bad Gateway', message: 'try again later' }],
  gatewayTimeout: [{ statusCode: 504, error: 'Gateway Timeout', message: 'try again later' }]
}

module.exports = {
  responses,
  mock: response => {
    return jest.fn(async () => {
      return response
    })
  },
  throws: () => {
    return jest.fn(async () => {
      throw new Error('trouble at t mill!')
    })
  }
}
