import { Router } from "express";
import * as userController from "../controllers/userController.js";

const userRouter = Router();

userRouter.post("/users", userController.create);
userRouter.post("/users/login", userController.login);

export default userRouter;