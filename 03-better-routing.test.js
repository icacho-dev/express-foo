const assert = require("assert");
const httpMocks = require("node-mocks-http");
const exampleRouteHandler = require("./user-router");

describe("User Router", () => {

  it("should return 'hello user' for GET /user", () => {
    const mockRequest = httpMocks.createRequest({
      method: "GET",
      url: "/user"
    });
    const mockResponse = httpMocks.createResponse();

    exampleRouteHandler(mockRequest, mockResponse);

    const actualResponseBody = mockResponse._getData();
    const expectedResponseBody = "hello user";
    assert(actualResponseBody, expectedResponseBody);
  });

});
