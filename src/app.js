const fastifyPlugin = require("fastify-plugin");

async function app(fastify, options) {
  fastify.register(require("@fastify/cors"));

  fastify.register(require("./routes/testroutes"), { prefix: "/test" });
}

module.exports = fastifyPlugin(app);
