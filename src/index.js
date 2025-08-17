const utilityPlugin = require("./plugins/utilities");
const userRoutes = require("./routes/userRoutes");

// server.js
const fastify = require("fastify")({ logger: true });

fastify.register(utilityPlugin)

fastify.register(userRoutes, { prefix: "/users" });

fastify.get("/", async (request, reply) => {
    const serverId = fastify.generateId()
  return { hello: "world" , serverId };
});

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
    fastify.log.info(`Server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
