import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import { StatusCodes } from "http-status-codes";
import userService from "../services/user.service.js";
import { devConfig } from "../../config/env/development.js";
export default {
  async login(req, res) {
    try {
      const { value, error } = userService.validateLoginSchema(req.body);
      if (error && error.details) {
        console.log("Error 1", error);
        return res.status(StatusCodes.BAD_REQUEST).json(error);
      }
      const user = await userService.getUserByEmail(value.email);
      if (!user) {
        return res
          .status(StatusCodes.BAD_REQUEST)
          .json({ err: "Invalid username or password" });
      }
      const matched = await bcryptjs.compare(value.password, user.password);
      if (!matched) {
        return res
          .status(StatusCodes.UNAUTHORIZED)
          .json({ err: "Password not matched" });
      }

      const token = jwt.sign({ id: user._id }, `${devConfig.secret}`, {
        expiresIn: "1d",
      });
      return res.json({ sucess: true, token });
    } catch (err) {
      console.log("Error last", err);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
  },
};
