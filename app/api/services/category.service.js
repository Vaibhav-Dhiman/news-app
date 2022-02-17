import Category from "../models/category.js";

export default {
  async getAllCategory() {
    let news = await Category.find({});
    return news;
  },

  async getCategory(id) {
    let data = await Category.findOne({ _id: id });
    return data;
  },

  async createCategory(newCategory) {
    try {
      let category = await new Category(newCategory);
      category.save();
      return category;
    } catch {
      return null;
    }
  },
};
