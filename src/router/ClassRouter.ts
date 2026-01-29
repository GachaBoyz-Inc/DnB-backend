import { Router } from "express";
import ClassController from "../controller/ClassController.ts";

const classController = new ClassController();
const classRouter = Router();

classRouter.get("/getAll", (req, res) => classController.getAllClass(req, res));
classRouter.get("/getById/:id", (req, res) => classController.getClassById(req, res));
classRouter.post("/create", (req, res) => classController.create(req, res));
classRouter.patch("/update/:id", (req, res) => classController.update(req, res));
classRouter.delete("/delete/:id", (req, res) => classController.delete(req, res));

export default classRouter;