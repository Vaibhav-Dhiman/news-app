import News from "../models/news.js";

export default {
  async getAllNews(queryData) {
    const { author, category, dateSort } = queryData;
    const dtSort = dateSort === "desc" ? 1 : -1;
    const cat = category === undefined ? "" : category;
    const au = author === undefined ? "" : author;
    try {
      const news = await News.aggregate([
        {
          $lookup: {
            from: "author",
            localField: "author",
            foreignField: "_id",
            as: "author",
          },
        },
        {
          $lookup: {
            from: "category",
            localField: "category",
            foreignField: "_id",
            as: "category",
          },
        },
        {
          $match: {
            $and: [
              { "author.name": { $regex: au, $options: "i" } },
              { "category.name": { $regex: cat, $options: "i" } },
            ],
          },
        },
        { $sort: { createdAt: dtSort } },
        {
          $project: {
            "author._id": 0,
            "category._id": 0,
          },
        },
      ]);
      return news;
    } catch (e) {
      console.log(e);
    }
  },

  async getNews(id) {
    try {
      let data = await News.findOne({ _id: id });
      return data;
    } catch {
      console.log(e);
    }
  },

  async createNews(newNews) {
    try {
      let news = await new News(newNews);
      news.createdAt = new Date();
      news.save();
      return news;
    } catch {
      console.log(e);
    }
  },
};
