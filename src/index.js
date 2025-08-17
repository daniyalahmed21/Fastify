import Fastify from "fastify";

const fastify = Fastify({
  logger: false,
});

fastify.get("/", function (request, reply) {
  reply.send({ hello: "world" });
});


fastify.listen({port:3000},(err,address)=>{
    if(err){
        console.log(err)
    }

    console.log(`server running on port ${address}`)
})