import categoryService from "../services/category.service.js";
import { StatusCodes } from "http-status-codes";

export default {
  async getAllCategory(req, res) {
    try {
      const category = await categoryService.getAllCategory();
      if (category.length == 0)
        return res.status(StatusCodes.NOT_FOUND).json("Create A Category");
      return res.json(category);
    } catch (err) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
  },

  async getCategory(req, res) {
    try {
      const category = await categoryService.getCategory(req.params.id);
      if (!category)
        return res.status(StatusCodes.NOT_FOUND).json("Category Not Found");
      return res.json(author);
    } catch (err) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
  },

  async createCategory(req, res) {
    try {
      const category = await categoryService.createCategory(req.body);
      return res.status(StatusCodes.CREATED).json("Category Added");
    } catch (err) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
  },
};
