import { Query, ID } from "node-appwrite";
import {
  DATABASE_ID,
  USER_COLLECTION_ID,
  databases,
  users,
  account,
} from "./index.js";

export const listUsers = async () => {
  try {
    const result = await databases.listDocuments(
      DATABASE_ID,
      USER_COLLECTION_ID,
      [Query.orderDesc("$createdAt"), Query.limit(100)]
    );
    return result.documents;
  } catch (error) {
    console.error("Failed to list users:", error);
    throw error;
  }
};

export const getUserById = async (userId) => {
  try {
    const result = await databases.getDocument(
      DATABASE_ID,
      USER_COLLECTION_ID,
      userId
    );
    return result;
  } catch (error) {
    console.error("Failed to get user by ID:", error);
    throw error;
  }
};

export const createUser = async (data) => {
  try {
    const result = await databases.createDocument(
      DATABASE_ID,
      USER_COLLECTION_ID,
      data.id,
      data
    );
    return result;
  } catch (error) {
    console.error("Failed to create user:", error);
    throw error;
  }
};


