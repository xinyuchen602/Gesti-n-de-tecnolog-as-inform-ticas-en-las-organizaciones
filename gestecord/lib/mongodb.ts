import { MongoClient } from "mongodb";


let cached: MongoClient;

async function connectToDatabase() {
  if (!cached) {
    const client = await MongoClient.connect("mongodb://admin:admin@gestion-de-tecnologias-informaticas-en-las-organizaciones-db-1:27017/");
    try {
      await client.connect();
      cached = client;
      console.log('MongoDB connected');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      throw new Error('Error connecting to MongoDB');
    }
  }
  return cached;
}

export async function getDB() {
  const client = await connectToDatabase();
  return client.db('gestecord');
}
