import { Router } from "express";
import SkillsController from "../controller/SkillsController.js";

const skillsController = new SkillsController();
const skillsRouter = Router();

skillsRouter.get("/getAll", (req, res) => skillsController.getAll(req, res));
skillsRouter.get("/getById/:id", (req, res) => skillsController.getSkillsById(req, res));
skillsRouter.post("/create", (req, res) => skillsController.create(req, res));
skillsRouter.patch("/update/:id", (req, res) => skillsController.update(req, res));
skillsRouter.delete("/delete/:id", (req, res) => skillsController.delete(req, res));

export default skillsRouter;