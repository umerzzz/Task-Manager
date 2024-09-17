import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { router } from "./routes/task.routes.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;
const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.USER}:${process.env.DB_PASS}@cluster0.0djse.mongodb.net/`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 5000,
      }
    );
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};
connectDB();
app.use(cors());
app.use(express.json());
app.use("/api/v1", router);
app.listen(PORT, (req, res) => {
  console.log(`Server Running At Port ${PORT}`);
});
