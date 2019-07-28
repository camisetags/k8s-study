const PokemonService = require('./services');

module.exports = function PokemonHandlers(fastify, _options, next) {
  fastify.get('/', async (req, res) => {
    const { page, page_size: pageSize } = req.query;

    const users = await PokemonService.list({ page, pageSize });

    res.status(200);
    return users;
  });

  fastify.post('/', async (req, res) => {
    const { user } = req.body;

    try {
      await PokemonService.create(user);

      res.status(201);
      return 'ok';
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
