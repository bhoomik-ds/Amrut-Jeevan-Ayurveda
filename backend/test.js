import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();

console.log(process.env.MONGODB_URI);

const client = new MongoClient(process.env.MONGODB_URI);

try {
  await client.connect();
  console.log("✅ Connected successfully");
  await client.close();
} catch (err) {
  console.error(err);
}