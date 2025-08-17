const controllers = require("../controllers/testControllers");

async function testRoutes(fastify, options) {
  fastify.get("/ping", controllers.PingController);
}

module.exports = testRoutes;
