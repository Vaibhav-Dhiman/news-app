import express from "express";
import userController from "../controllers/user.controller.js";

export const userRouter = express.Router();

userRouter.get("/", userController.getAllUsers);
userRouter.get("/:id", userController.getUser);
userRouter.post("/", userController.createUser);
