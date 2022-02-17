import Author from "../models/author.js";

export default {
  async getAllAuthor() {
    let news = await Author.find({});
    return news;
  },

  async getAuthor(id) {
    let data = await Author.findOne({ _id: id });
    return data;
  },

  async createAuthor(newAuthor) {
    try {
      let author = await new Author(newAuthor);
      author.save();
      return author;
    } catch {
      return null;
    }
  },
};
