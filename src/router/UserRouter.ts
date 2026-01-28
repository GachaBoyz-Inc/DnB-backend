import { Router } from "express";
import UserController from "../controller/UserController.js";

const userController = new UserController();
const userRouter = Router();

userRouter.get("/getAll", (req, res) => userController.getAllUsers(req, res));
userRouter.get("/getById/:id", (req, res) => userController.getUserById(req, res));
userRouter.post("/create", (req, res) => userController.create(req, res));
userRouter.patch("/update/:id", (req, res) => userController.update(req, res));
userRouter.delete("/delete/:id", (req, res) => userController.delete(req, res));

export default userRouter;