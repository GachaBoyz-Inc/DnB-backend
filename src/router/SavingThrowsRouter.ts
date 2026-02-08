import { Router } from "express";
import SavingThrowsController from "../controller/SavingThrowsController.js";

const savingThrowsController = new SavingThrowsController();
const savingThrowsRouter = Router();

savingThrowsRouter.get("/getAll", (req, res) => savingThrowsController.getAllSavingThrows(req, res));
savingThrowsRouter.get("/getById/:id", (req, res) => savingThrowsController.getSavingThrowsById(req, res));
savingThrowsRouter.post("/create", (req, res) => savingThrowsController.create(req, res));
savingThrowsRouter.patch("/update/:id", (req, res) => savingThrowsController.update(req, res));
savingThrowsRouter.delete("/delete/:id", (req, res) => savingThrowsController.delete(req, res));

export default savingThrowsRouter;