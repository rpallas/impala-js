const Api = require('../../../src/client/api')
const Fakes = require('../../helpers/fakes')

let mockClient

describe('Api', () => {
  describe('when the request is successful', () => {
    beforeEach(() => {
      mockClient = {
        get: Fakes.mock(Fakes.responses.OK),
        post: Fakes.mock(Fakes.responses.OK)
      }
    })

    it('makes requests with an authentication token', async () => {
      await Api('dummy-token', mockClient).makeRequest('GET', 'test')
      
      expect(mockClient.get.mock.calls[0][1].headers.Authorization).toEqual('Bearer dummy-token')
    })

    it('makes requests with correct path and method', async () => {
      await Api('dummy-token', mockClient).makeRequest('POST', 'test')

      expect(mockClient.post.mock.calls[0][0]).toEqual('test')
    })

    it('makes requests with correct options', async () => {
      await Api('dummy-token', mockClient).makeRequest('POST', 'test', {
        query: 'param1=test',
        baseUrl: 'foo/'
      })

      expect(mockClient.post.mock.calls[0][1].query).toEqual('param1=test')
      expect(mockClient.post.mock.calls[0][1].baseUrl).toEqual('foo/')
    })
  })

  describe('when there is an error', () => {
    beforeEach(() => {
      mockClient = {
        get: Fakes.throws()
      }
    })

    it('throws an error with correct message', async () => {
      const makeRequest = Api('dummy-token', mockClient).makeRequest('get', 'test')

      await expect(makeRequest).rejects.toThrow('Http Client', 'trouble at t mill!')
    })
  })
})
