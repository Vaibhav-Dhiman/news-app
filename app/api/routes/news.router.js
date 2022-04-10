import express from "express";
import newsController from "../controllers/news.controller.js";
import { checkRootLogin } from "../middlewares/jwt-verify-middleware.js";

export const newsRouter = express.Router();

newsRouter.get("/", checkRootLogin, newsController.getAllNews);
newsRouter.get("/:id", checkRootLogin, newsController.getNews);
newsRouter.post("/", checkRootLogin, newsController.createNews);
