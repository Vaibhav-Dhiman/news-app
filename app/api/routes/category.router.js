import express from "express";
import categoryController from "../controllers/category.controller.js";
import { checkRootLogin } from "../middlewares/jwt-verify-middleware.js";

export const categoryRouter = express.Router();

categoryRouter.get("/", checkRootLogin, categoryController.getAllCategory);
categoryRouter.get("/:id", checkRootLogin, categoryController.getCategory);
categoryRouter.post("/", checkRootLogin, categoryController.createCategory);
