import Fastify from "fastify";

const fastify = Fastify();

// fastify.get("/", (request, reply) => {
//   return reply.send("Order endpoint works!");
// });

fastify.get("/health", (request, reply) => {
  return reply.status(200).send({
    status: "ok",
    uptime: process.uptime(),
    timestamp: Date.now(),
  });
});

const start = async () => {
  try {
    await fastify.listen({ port: 8006 });
    console.log("Order service is running on port 8006");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
