const Api = require("../../../src/client/api");
const Responses = require("../../helpers/responseStubs");

let mockClient;

describe("Api", () => {
  beforeEach(() => {
    mockClient = {
      get: jest.fn(async () => { return Responses.OK }),
      post: jest.fn(async () => { return Responses.OK })
    }
  });

  it("makes requests with an authentication token", async () => {
    await Api("dummy-token", mockClient).makeRequest("GET", "test");
    expect(mockClient.get.mock.calls[0][1].headers.Authorization).toEqual("Bearer dummy-token");
  });

  it("makes requests with correct path and method", async () => {
    await Api("dummy-token", mockClient).makeRequest("POST", "test");
    expect(mockClient.post.mock.calls[0][0]).toEqual("test");
  });

  it("makes requests with correct options", async () => {
    await Api("dummy-token", mockClient).makeRequest("POST", "test", { query: 'param1=test', baseUrl: 'foo/' });
    expect(mockClient.post.mock.calls[0][1].query).toEqual("param1=test");
    expect(mockClient.post.mock.calls[0][1].baseUrl).toEqual("foo/");
  });
});
