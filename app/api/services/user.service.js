import User from "../models/user.js";
import Joi from "joi";
import bcryptjs from "bcryptjs";

export default {
  async getAllUsers() {
    let users = await User.find({});
    return users;
  },

  async getUser(id) {
    let user = await User.findOne({ _id: id });
    return user;
  },

  async getUserByEmail(email) {
    let user = await User.findOne({ email: email });
    return user;
  },

  async createUser(newUser) {
    try {
      const user = await new User();
      const salt = await bcryptjs.genSalt();
      const hash = await bcryptjs.hash(newUser.password, salt);
      user.userName = newUser.userName;
      user.email = newUser.email;
      user.phone = newUser.phone;
      user.gender = newUser.gender;
      user.materialStatus = newUser.materialStatus;
      user.dob = newUser.dob;
      user.password = hash;
      await user.save();
    } catch (err) {
      return err;
    }
  },

  validateUserSchema(body) {
    const schema = Joi.object().keys({
      userName: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      phone: Joi.string().required(),
      gender: Joi.string().required(),
      materialStatus: Joi.string().required(),
      dob: Joi.string().required(),
    });
    const { error, value } = schema.validate(body);
    if (error && error.details) {
      return { error };
    }
    return { value };
  },

  validateLoginSchema(body) {
    const schema = Joi.object().keys({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    });
    const { error, value } = schema.validate(body);
    if (error && error.details) {
      return { error };
    }
    return { value };
  },
};
