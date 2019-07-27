const Fastify = require('fastify');

const fastify = Fastify({
  logger: true,
});

const PORT = process.env.PORT || 4000;

fastify.get('/', async function(req, res) {
  return {
    message: 'Hello Kubernetes!',
  };
});

fastify.listen(PORT, '0.0.0.0', function(err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`server listening on ${address}`);
});
