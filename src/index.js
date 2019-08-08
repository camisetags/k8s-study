const Fastify = require('fastify');
const PokemonHandlers = require('./pokemon/handlers');

const PORT = process.env.PORT || 4000;

const fastify = Fastify({
  logger: {
    prettyPrint: true,
  },
});

fastify.get('/', async function() {
  return {
    message: 'Hello Kubernetes!',
  };
});

fastify.register(PokemonHandlers, { prefix: '/pokemons' });

fastify.listen(PORT, '0.0.0.0', function(err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`server listening on ${address}`);
});
