import { defineConfig } from 'drizzle-kit';

const env = process.env || {};

export default defineConfig({
  dialect: 'postgresql',
  schema: './src/db/schema',
  out: './drizzle',
  migrations: {
    table: '_drizzle_migrations',
    schema: 'public',
  },
  dbCredentials: {
    host: env.DB_HOST || 'localhost',
    port: env.DB_PORT ? parseInt(env.DB_PORT, 10) : 5432,
    user: env.DB_USER || 'postgres',
    password: env.DB_PASSWORD || 'password',
    database: env.DB_NAME || 'siti_db',
    ssl: env.DB_SSL ? env.DB_SSL === 'true' : false,
  },
});