import express from "express";
import isAuth from "../Middlewares/isAuth.js";
import { createEditShop } from "../Controllers/shop.controller.js";
import { upload } from "../Middlewares/multer.js";

const shopRouter = express.Router();

shopRouter.get("/create-edit", isAuth, upload.single("image"), createEditShop); // isAuth middleware to protect the route and createEditShop controller to create or edit shop details // upload.single("image") is to upload a single image with the key "image" from the request body

export default shopRouter;
