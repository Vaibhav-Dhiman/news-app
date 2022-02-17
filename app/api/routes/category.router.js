import express from "express";
import categoryController from "../controllers/category.controller.js";

export const categoryRouter = express.Router();

categoryRouter.get("/", categoryController.getAllCategory);
categoryRouter.get("/:id", categoryController.getCategory);
categoryRouter.post("/", categoryController.createCategory);
