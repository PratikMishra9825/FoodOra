import express from "express";
import { getCurrentUser } from "../Controllers/user.controller.js";
import isAuth from "../Middlewares/isAuth.js";

const userRouter = express.Router();

userRouter.get("/current", isAuth, getCurrentUser); // isAuth middleware to protect the route and getCurrentUser controller to fetch user data

export default userRouter;
