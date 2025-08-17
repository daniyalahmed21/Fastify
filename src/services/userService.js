async function createUser(userData, fastify) {
  const newUserId = fastify.generateId();

  const newUser = { newUserId, ...userData };

  return newUser;
}


module.exports = {createUser}