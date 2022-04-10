import express from "express";
import authorController from "../controllers/author.controller.js";
import { checkRootLogin } from "../middlewares/jwt-verify-middleware.js";

export const authorRouter = express.Router();

authorRouter.get("/", checkRootLogin, authorController.getAllAuthor);
authorRouter.get("/:id", checkRootLogin, authorController.getAuthor);
authorRouter.post("/", checkRootLogin, authorController.createAuthor);
