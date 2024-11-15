import { drizzle } from 'drizzle-orm/node-postgres';

const db = drizzle({
  connection: {
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'password',
    database: 'siti_db',
  },
});

export default db;