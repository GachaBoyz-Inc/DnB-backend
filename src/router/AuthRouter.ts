import { Router } from "express";
import AuthController from "../controller/AuthController.js";

const authController = new AuthController();
const authRouter = Router();

authRouter.post("/login", (req, res) => authController.login(req, res));
authRouter.post("/register", (req, res) => authController.register(req, res));

export default authRouter;