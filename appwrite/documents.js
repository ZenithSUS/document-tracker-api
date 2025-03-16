import { Query, ID } from "node-appwrite";
import { DATABASE_ID, DOCUMENT_COLLECTION_ID, databases } from "./index.js";

export const listDocuments = async () => {
  try {
    const result = await databases.listDocuments(
      DATABASE_ID,
      DOCUMENT_COLLECTION_ID,
      [Query.orderDesc("$createdAt")]
    );

    return result.documents;
  } catch (error) {
    console.error("Failed to list documents:", error);
    throw error;
  }
};

export const getDocumentById = async (documentId) => {
  try {
    const result = await databases.getDocument(
      DATABASE_ID,
      DOCUMENT_COLLECTION_ID,
      documentId
    );
    return result;
  } catch (error) {
    console.error("Failed to get document by ID:", error);
    throw error;
  }
};

export const createDocument = async (data) => {
  try {
    const result = await databases.createDocument(
      DATABASE_ID,
      DOCUMENT_COLLECTION_ID,
      ID.unique(),
      data
    );

    return result;
  } catch (error) {
    console.error("Failed to create document:", error);
    throw error;
  }
};

export const editDocument = async (documentId, data) => {
  try {
    const result = await databases.updateDocument(
      DATABASE_ID,
      DOCUMENT_COLLECTION_ID,
      documentId,
      data
    );
    return result;
  } catch (error) {
    console.error("Failed to update document:", error);
    throw error;
  }
};

export const deleteDocument = async (documentId) => {
  try {
    const result = await databases.deleteDocument(
      DATABASE_ID,
      DOCUMENT_COLLECTION_ID,
      documentId
    );
    return result;
  } catch (error) {
    console.error("Failed to delete document:", error);
    throw error;
  }
};
