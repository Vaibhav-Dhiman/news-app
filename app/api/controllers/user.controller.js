import userService from "../services/user.service.js";
import { StatusCodes } from "http-status-codes";

export default {
  async getAllUsers(req, res) {
    try {
      const user = await userService.getAllUsers();
      if (user.length == 0)
        return res.status(StatusCodes.NOT_FOUND).json("Create A User");
      return res.json(user);
    } catch (err) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
  },

  async getUser(req, res) {
    try {
      const user = await userService.getUser(req.params.id);
      if (!user)
        return res.status(StatusCodes.NOT_FOUND).json("User Not Found");
      return res.json(user);
    } catch (err) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
  },

  async createUser(req, res) {
    try {
      const { value, error } = userService.validateUserSchema(req.body);
      if (error && error.details) {
        return res.status(StatusCodes.BAD_REQUEST).json(error);
      }

      const existingUser = await userService.getUser(req.body.id);
      if (existingUser) {
        return res
          .status(StatusCodes.BAD_REQUEST)
          .json({ err: "user already exists" });
      }
      const user = await userService.createUser(value);
      return res.status(StatusCodes.CREATED).json("User Added");
    } catch (err) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
  },
};
