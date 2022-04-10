import jwt from "jsonwebtoken";
import { devConfig } from "../../config/env/development.js";
import userService from "../services/user.service.js";

export const checkRootLogin = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    // const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const decoded = jwt.verify(token, devConfig.secret);

    const rootUser = await userService.getUser(decoded.id);

    if (!rootUser) {
      throw new Error("User cannot find!!");
    }

    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id;
    next();
  } catch (e) {
    res.status(401).send({ error: "Authentication Failed!!" });
  }
};
