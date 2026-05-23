import pkg from 'pg';
const { Pool } = pkg;
import dotenv from 'dotenv';

dotenv.config();

let dbConfig;

// Se existir a variável DATABASE_URL (Ou seja, estamos rodando no Render)
if (process.env.DATABASE_URL) {
  dbConfig = {
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false // ISSO AQUI RESOLVE O ERRO SSL/TLS!
    }
  };
} else {
  // Se não existir, estamos rodando localmente no seu computador
  dbConfig = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  };
}

const pool = new Pool(dbConfig);

export { pool };