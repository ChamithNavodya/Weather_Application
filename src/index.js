import dotEnv from "dotenv";
dotEnv.config();

import app from "./app.js";
import connectDB from "./config/db.js";

const PORT = process.env.PORT;

async function startServer() {
   try {
      // Connect to the database
      await connectDB();

      app.listen(PORT, () => {
         console.log(`Meta-data service running on port ${PORT}`);
      });
   } catch (error) {
      console.error("Error starting server:", error);
   }
}

startServer();
