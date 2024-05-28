import { Pool } from 'pg';
import dotenv from 'dotenv';

// Carga las variables de entorno desde el archivo .env
dotenv.config();

// Configura la conexión a la base de datos PostgreSQL
const pool = new Pool();
// Función para obtener una conexión de la piscina
export async function getDB() {
  const client = await pool.connect();
  return client;
}

// Función para inicializar la tabla contestants
export async function initializeContestantsTable() {
  try {
    const db = await getDB();
    // Consulta para crear la tabla contestants si no existe
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS contestants (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        surname VARCHAR(255) NOT NULL,
        gender VARCHAR(20) NOT NULL,
        votes JSONB NOT NULL DEFAULT '[]',
        createdAt TIMESTAMP NOT NULL DEFAULT NOW()
      )
    `;
    await db.query(createTableQuery);
    console.log('Table "contestants" created successfully.');
  } catch (error) {
    console.error('Error initializing contestants table:', error);
    throw new Error('Error initializing contestants table');
  }
}

