import {
  listUsers,
  getUserById,
  createUser as storeUser,
  createUserWithCredentials as storeUserWithCredentials,
} from "../appwrite/users.js";

export const getAllUsers = async (req, res) => {
  try {
    const limit = req.query.limit;
    const users = await listUsers();

    if (!isNaN(limit) && limit > 0) {
      return res.status(200).json(users.slice(0, limit));
    }

    res.status(200).json(users);
  } catch (error) {
    console.error("Failed to get all users:", error);
    res.status(500).json({ message: error.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await getUserById(id);

    return res.status(200).json(user);
  } catch (error) {
    console.error("Failed to get user by ID:", error);
    res.status(500).json({ message: error.message });
  }
};

export const createUser = async (req, res) => {
  try {
    const { email, firstName, middleName, lastName, password } = req.body;
    
    if (!email || !firstName || !lastName || !password) {
      return res
        .status(400)
        .json({ status: res.statusCode, message: "Missing required fields" });
    }

    const fullname = `${firstName} ${middleName} ${lastName}`;
    await storeUserWithCredentials(email, password, fullname);
    await storeUser({ email, firstName, middleName, lastName });

    return res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Failed to create user:", error);
    res.status(500).json({ status: res.statusCode, message: error.message });
  }
};
