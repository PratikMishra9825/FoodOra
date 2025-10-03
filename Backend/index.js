import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./Config/db.js";
import cookieParser from "cookie-parser";
import authRouter from "./Routes/auth.routes.js";
import userRouter from "./Routes/user.routes.js";
import cors from "cors";
const app = express();

const port = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

app.listen(port, () => {
  connectDB();
  console.log(`Server is running on port ${port}`);
});
