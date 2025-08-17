const fastifyPlugin = require("fastify-plugin");

async function utilityPlugin(fastify, options) {
  fastify.decorate("generateId", () => {
    return Math.random().toString(36).substring(2, 8);
  });
}

module.exports = fastifyPlugin(utilityPlugin);