import { Router } from "express";
import AttributesController from "../controller/AttributesController.js";

const attributesController = new AttributesController();
const attributesRouter = Router();

attributesRouter.get("/getAll", (req, res) => attributesController.getAllAttributes(req, res));
attributesRouter.get("/getById/:id", (req, res) => attributesController.getAttributesById(req, res));
attributesRouter.post("/create", (req, res) => attributesController.create(req, res));
attributesRouter.patch("/update/:id", (req, res) => attributesController.update(req, res));
attributesRouter.delete("/delete/:id", (req, res) => attributesController.delete(req, res));

export default attributesRouter;