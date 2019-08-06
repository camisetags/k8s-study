const { Model } = require('objection');
const Knex = require('../database');

(async function createSchema() {
  if (await Knex.schema.hasTable('pokemons')) {
    return;
  }

  // Create database schema. You should use Knex migration files
  // to do this. We create it here for simplicity.
  await Knex.schema.createTable('pokemons', table => {
    table.increments('id').primary();
    table.string('name');
    table.string('type');
  });
})();

// Give the Knex instance to objection.
Model.knex(Knex);

// Pokemon model.
class Pokemon extends Model {
  static get tableName() {
    return 'pokemons';
  }

  static get idColumn() {
    return 'id';
  }

  static get jsonSchema() {
    return {
      type: 'object',

      properties: {
        id: { type: 'integer' },
        name: { type: 'string', minLength: 1, maxLength: 255 },
        type: { type: 'string' },
      },
    };
  }
}

module.exports = {
  Pokemon,
};
