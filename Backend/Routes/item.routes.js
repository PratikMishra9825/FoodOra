import express from "express";
import isAuth from "../Middlewares/isAuth.js";
import { addItems, editItem } from "../Controllers/item.controller.js";
import { upload } from "../Middlewares/multer.js";

const itemRouter = express.Router();

itemRouter.post("/add-item", isAuth, upload.single("image"), addItems); // post is to create a new item, isAuth middleware to protect the route and addItems controller to add new items to the shop // upload.single("image") is to upload a single image with the key "image" from the request body from frontend to backend

itemRouter.post("/edit-item", isAuth, upload.single("image"), editItem); // post is to edit an existing item, isAuth middleware to protect the route and editItem controller to edit items of the shop // upload.single("image") is to upload a single image with the key "image" from the request body from frontend to backend

export default itemRouter;
