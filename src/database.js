const Knex = require('knex');

// Initialize knex.
module.exports = Knex({
  client: 'pg',
  connection: {
    user: process.env.POSTGRES_USER || 'postgres',
    password: process.env.POSTGRES_PASSWORD || 'postgres',
    host: process.env.POSTGRES_HOST || 'localhost',
    database: process.env.POSTGRES_DB || 'k8s-database',
    port: process.env.POSTGRES_PORT || 54322,
  },
});
