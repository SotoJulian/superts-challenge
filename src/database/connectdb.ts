import { MongoClient, Db } from 'mongodb';

const url = 'mongodb://localhost:27017';
const dbName = 'usuarios';

let client: MongoClient;
let db: Db;

export const connectToDb = async (): Promise<Db> => {
  if (!client) {
    client = await MongoClient.connect(url);
    db = client.db(dbName);
  }
  return db;
};

