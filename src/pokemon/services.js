const { Pokemon } = require('./models');

class PokemonService {
  list({ page, pageSize = 10 }) {
    return Pokemon.query()
      .orderBy('id', 'desc')
      .page(page - 1, pageSize);
  }

  getByID(id) {
    return Pokemon.query()
      .where({ id })
      .first();
  }

  create(pokemon) {
    return Pokemon.query().insert(pokemon);
  }
}

module.exports = new PokemonService();
