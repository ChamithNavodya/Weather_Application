import User from "../models/User.js";
import {
   hashPassword,
   comparePasswords,
   generateToken,
} from "../services/authService.js";

// POST /api/auth/register
export const register = async (req, res) => {
   const { email, password, latitude, longitude } = req.body;
   try {
      if (!email || !password || !latitude || !longitude) {
         const missingFields = [];
         if (!email) missingFields.push("email");
         if (!password) missingFields.push("password");
         if (!latitude) missingFields.push("latitude");
         if (!longitude) missingFields.push("longitude");
         const errorMessage = `Required fields missing: ${missingFields.join(
            ", "
         )}`;
         return res.status(200).json(errorMessage);
      }
      const hashedPassword = await hashPassword(password);
      const newUser = new User({
         email,
         password: hashedPassword,
         location: { latitude, longitude },
      });
      await newUser.save();
      res.status(201).send("User registered successfully");
   } catch (error) {
      res.status(400).send(error.message);
   }
};

// POST /api/auth/login
export const login = async (req, res) => {
   const { email, password } = req.body;
   try {
      const user = await User.findOne({
         email: { $regex: new RegExp(`^${email}$`, "i") },
      });
      if (!user) return res.status(404).send("User not found");

      const isMatch = await comparePasswords(password, user.password);
      if (!isMatch) return res.status(401).send("Invalid credentials");

      const token = generateToken({ id: user._id });
      res.send({ token });
   } catch (error) {
      res.status(400).send(error);
   }
};
