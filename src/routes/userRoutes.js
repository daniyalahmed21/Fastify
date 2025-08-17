const { userControllerHandler } = require("../controllers/userController");

async function userRoutes(fastify, options) {
  fastify.post("/", userControllerHandler);

  fastify.get("/:id", async (req, res) => {
    const { id } = req.params;
    res.send(`This is a user id ${id}`);
  });
}

module.exports = userRoutes;
