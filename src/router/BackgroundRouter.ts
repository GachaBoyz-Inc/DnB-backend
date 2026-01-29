import { Router } from "express";
import BackgroundController from "../controller/BackgroundController.js";

const backgroundController = new BackgroundController();
const backgroundRouter = Router();

backgroundRouter.get("/getAll", (req, res) => backgroundController.getAllBackgrounds(req, res));
backgroundRouter.get("/getById/:id", (req, res) => backgroundController.getBackgroundById(req, res));
backgroundRouter.post("/create", (req, res) => backgroundController.create(req, res));
backgroundRouter.patch("/update/:id", (req, res) => backgroundController.update(req, res));
backgroundRouter.delete("/delete/:id", (req, res) => backgroundController.delete(req, res));

export default backgroundRouter;