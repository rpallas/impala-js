const Api = require("../../../src/client/api");
const Responses = require("../../helpers/responseStubs");

let mockClient;

describe("Api", () => {
  beforeEach(() => {
    mockClient = async (url, options) => {
      return Responses.OK;
    };
  });

  it("makes requests with authentication token", async () => {
    await Api("dummy-token", mockClient).makeRequest("GET", "test");
    expect(mockClient.mock.calls[0][1].headers.Authorization).toEqual("Bearer dummy-token");
  });
});
