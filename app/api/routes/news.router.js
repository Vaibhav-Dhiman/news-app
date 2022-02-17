import express from "express";
import newsController from "../controllers/news.controller.js";

export const newsRouter = express.Router();

newsRouter.get("/", newsController.getAllNews);
newsRouter.get("/:id", newsController.getNews);
newsRouter.post("/", newsController.createNews);
