const services = require("../services/testService");

async function PingController(request, reply) {
  const response = await services.PingCheck();
  reply.send({ hello: response });
}

module.exports = { PingController };
