const usersRouter = require("./users-router");
const http_mocks = require("node-mocks-http");
const should = require("should");

function buildResponse() {
  return http_mocks.createResponse({
    eventEmitter: require("events").EventEmitter,
  });
}

describe("Users Express Router", function () {
  it("Should return all users", function (done) {
    var response = buildResponse();
    var request = http_mocks.createRequest({
      method: "GET",
      url: "/",
    });

    response.on("end", () => {
      response._getData().should.equal("GET users");
      done();
    });

    usersRouter.handle(request, response);
  });

  it("Should create a user", function (done) {
    var response = buildResponse();
    var request = http_mocks.createRequest({
      method: "POST",
      url: "/",
    });

    response.on("end", () => {
      response._getData().should.equal("POST user");
      done();
    });

    usersRouter.handle(request, response);
  });
});
