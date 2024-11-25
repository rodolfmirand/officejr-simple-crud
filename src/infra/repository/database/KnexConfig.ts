import { Knex } from 'knex';

export const config: Knex.Config = {
  client: 'pg', 
  connection: {
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '1234',
    database: 'officejr-database',
  }
};
