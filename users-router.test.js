const controller = require("./users-router"),
  http_mocks = require("node-mocks-http"),
  should = require("should");

function buildResponse() {
  return http_mocks.createResponse({
    eventEmitter: require("events").EventEmitter,
  });
}

describe("Users Express Router", function () {
  it("Should return an static response", function (done) {
    var response = buildResponse();
    var request = http_mocks.createRequest({
      method: "GET",
      url: "/",
    });

    response.on("end", function () {
      response._getData().should.equal("GET users");
      done();
    });

    controller.handle(request, response);
  });
});
