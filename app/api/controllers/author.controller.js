import authorService from "../services/author.service.js";
import { StatusCodes } from "http-status-codes";

export default {
  async getAllAuthor(req, res) {
    try {
      const author = await authorService.getAllAuthor();
      if (author.length == 0)
        return res.status(StatusCodes.NOT_FOUND).json("Create A Author");
      return res.json(author);
    } catch (err) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
  },

  async getAuthor(req, res) {
    try {
      const author = await authorService.getAuthor(req.params.id);
      if (!author)
        return res.status(StatusCodes.NOT_FOUND).json("Author Not Found");
      return res.json(author);
    } catch (err) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
  },

  async createAuthor(req, res) {
    try {
      const author = await authorService.createAuthor(req.body);
      return res.status(StatusCodes.CREATED).json("Author Added");
    } catch (err) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
  },
};
