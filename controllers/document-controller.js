import {
  listDocuments,
  getDocumentById,
  createDocument as storeDocument,
  editDocument,
  deleteDocument,
} from "../appwrite/documents.js";

export const getAllDocuments = async (req, res) => {
  try {
    const limit = req.query.limit;
    const documents = await listDocuments();

    if (!isNaN(limit) && limit > 0) {
      return res.status(200).json(documents.slice(0, limit));
    }
    return res.status(200).json(documents);
  } catch (error) {
    console.error("Failed to get all documents:", error);
    res.status(500).json({ message: error.message });
  }
};

export const getDocument = async (req, res) => {
  try {
    const id = req.params.id;
    const document = await getDocumentById(id);

    return res.status(200).json(document);
  } catch (error) {
    console.error("Failed to get document by ID:", error);
    res.status(500).json({ message: error.message });
  }
};

export const createDocument = async (req, res) => {
  try {
    const { name, owner, fileUrl, status } = req.body;

    if (!name || !owner || !fileUrl || !status) {
      return res
        .status(400)
        .json({ status: res.statusCode, message: "Missing required fields" });
    }

    await storeDocument({ name, owner, fileUrl, status });

    return res.status(201).json({ message: "Document created successfully" });
  } catch (error) {
    console.error("Failed to create document:", error);
    res.status(500).json({ status: res.statusCode, message: error.message });
  }
};
