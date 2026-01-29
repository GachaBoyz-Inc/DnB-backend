import { Router } from "express";
import ItemController from "../controller/ItemController.js";

const itemController = new ItemController();
const itemRouter = Router();

itemRouter.get("/getAll", (req, res) => itemController.getAllItems(req, res));
itemRouter.get("/getById/:id", (req, res) => itemController.getItemById(req, res));
itemRouter.post("/create", (req, res) => itemController.create(req, res));
itemRouter.patch("/update/:id", (req, res) => itemController.update(req, res));
itemRouter.delete("/delete/:id", (req, res) => itemController.delete(req, res));

export default itemRouter;