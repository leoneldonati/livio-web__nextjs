import { MongoClient } from "mongodb";

const url = `mongodb+srv://leonelroman:${process.env.DB_PASS}@cluster0.fo3dmlm.mongodb.net/?w=majority`;

const client = new MongoClient(url, { retryWrites: true, appName: "Cluster0" });

await client.connect();

export const userModel = client.db(process.env.DB_NAME).collection("users");
export const postModel = client.db(process.env.DB_NAME).collection("posts");
