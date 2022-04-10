import express from "express";
import userController from "../controllers/user.controller.js";
import { checkRootLogin } from "../middlewares/jwt-verify-middleware.js";

export const userRouter = express.Router();

userRouter.get("/", checkRootLogin, userController.getAllUsers);
userRouter.get("/:id", checkRootLogin, userController.getUser);
userRouter.post("/", userController.createUser);
