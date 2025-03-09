import sdk  from "node-appwrite";
const { Client, Databases, Users } = sdk

const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject(process.env.PROJECT_ID)
    .setKey(process.env.APP_WRITE_API_KEY);

export const users = new Users(client);
export const databases = new Databases(client);
export const DATABASE_ID = process.env.DATABASE_ID;
export const USER_COLLECTION_ID = process.env.USER_COLLECTION_ID;