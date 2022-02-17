import News from "../models/news.js";

export default {
  async getAllNews(author, category) {
    // let query = {};
    console.log(author, category);
    // if (text || author || cat) {
    //   query = { "category.name": { $regex: cat, $options: "i" } };
    // }
    try {
      //const news = await News.find({}).populate(["author", "category"]);
      const news = await News.find({})
        //.select({ "_id.$": 1 })
        .populate({
          path: "author",
          // match: { name: { $regex: author, $options: "i" } },
          // select: "author._id",
        })
        // .exec();
        .populate({
          path: "category",
          //   match: { name: { $regex: category, $options: "i" } },
        });
      return news;
    } catch (e) {
      console.log(e);
    }
  },

  async getNews(id) {
    let data = await News.findOne({ _id: id });
    return data;
  },

  async createNews(newNews) {
    try {
      let news = await new News(newNews);
      news.createdAt = new Date();
      news.save();
      return news;
    } catch {
      return null;
    }
  },
};
