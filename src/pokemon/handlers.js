const PokemonService = require('./services');

module.exports = function PokemonHandlers(fastify, _options, next) {
  fastify.get('/', async (req, res) => {
    const { page = 1, limit: pageSize = 30 } = req.query;

    const users = await PokemonService.list({
      page: parseInt(page, 10),
      pageSize: parseInt(pageSize, 10),
    });

    res.status(200);
    return users;
  });

  fastify.post('/', async (req, res) => {
    const { pokemon } = req.body;

    try {
      const result = await PokemonService.create(pokemon);

      res.status(201);
      return result;
    } catch (error) {
      res.status(401);
      return {
        errors: error.message,
      };
    }
  });

  fastify.get('/:id', async (req, res) => {
    const { id } = req.params;

    const user = await PokemonService.getByID(id);

    res.status(200);
    return user;
  });

  next();
};
