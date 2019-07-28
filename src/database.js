const Knex = require('knex');

// Initialize knex.
module.exports = Knex({
  client: 'pg',
  connection: {
    host: process.env.PG_HOST || 'localhost',
    user: process.env.PG_USER || 'postgres',
    port: process.env.PG_PORT || 54322,
    password: process.env.PG_PASSWORD || 'postgres',
    database: process.env.PG_DATABASE || 'example-of-k8s',
  },
});
