import newsService from "../services/news.service.js";
import { StatusCodes } from "http-status-codes";

export default {
  async getAllNews(req, res) {
    try {
      const { author, category } = req.query;
      const news = await newsService.getAllNews(author, category);
      return res.json(news);
    } catch (err) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
  },

  async getNews(req, res) {
    try {
      const news = await newsService.getNews(req.params.id);
      if (!news)
        return res.status(StatusCodes.NOT_FOUND).json("News Not Found");
      return res.json(news);
    } catch (err) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
  },

  async createNews(req, res) {
    try {
      const news = await newsService.createNews(req.body);
      return res.status(StatusCodes.CREATED).json("News Added");
    } catch (err) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
  },
};
