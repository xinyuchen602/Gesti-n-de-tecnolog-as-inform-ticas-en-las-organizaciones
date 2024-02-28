import { MongoClient } from "mongodb";

if (!process.env.MONGODB_HOST) throw new Error('Invalid/Missing environment variable: "MONGODB_HOST"');
const host = process.env.MONGODB_HOST;
if (!process.env.MONGODB_DB) throw new Error('Invalid/Missing environment variable: "MONGODB_DB"');
const db = process.env.MONGODB_DB;

let cached: MongoClient;

async function connectToDatabase() {
  if (!cached) {
    const client = new MongoClient(host as string);
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
  return client.db(db);
}
