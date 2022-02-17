import express from "express";
import { newsRouter } from "./routes/news.router.js";
import { authorRouter } from "./routes/author.router.js";
import { categoryRouter } from "./routes/category.router.js";

export const restRouter = express.Router();
restRouter.use("/news", newsRouter);
restRouter.use("/author", authorRouter);
restRouter.use("/category", categoryRouter);
