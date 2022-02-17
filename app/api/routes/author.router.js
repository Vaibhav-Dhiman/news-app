import express from "express";
import authorController from "../controllers/author.controller.js";

export const authorRouter = express.Router();

authorRouter.get("/", authorController.getAllAuthor);
authorRouter.get("/:id", authorController.getAuthor);
authorRouter.post("/", authorController.createAuthor);
