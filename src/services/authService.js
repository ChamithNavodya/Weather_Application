import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

const generateToken = (payload) => {
   return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
};

const verifyToken = (token) => {
   return jwt.verify(token, process.env.JWT_SECRET);
};

const hashPassword = async (password) => {
   const salt = await bcrypt.genSalt(10);
   return bcrypt.hash(password, salt);
};

const comparePasswords = async (inputPassword, hashedPassword) => {
   return bcrypt.compare(inputPassword, hashedPassword);
};

export { generateToken, verifyToken, hashPassword, comparePasswords };
