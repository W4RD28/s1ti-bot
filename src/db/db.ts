import { drizzle } from 'drizzle-orm/node-postgres';

export const db = drizzle({
  connection: {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_NAME || 'siti_db',
  },
});

export default db;