import { Router } from "express";
import AttributesController from "../controller/AttributesController.js";

const attributesController = new AttributesController();
const AttributesRouter = Router();

AttributesRouter.get("/getAll", (req, res) => attributesController.getAllAttributes(req, res));
AttributesRouter.get("/getById/:id", (req, res) => attributesController.getAttributesById(req, res));
AttributesRouter.post("/create", (req, res) => attributesController.create(req, res));
AttributesRouter.patch("/update/:id", (req, res) => attributesController.update(req, res));
AttributesRouter.delete("/delete/:id", (req, res) => attributesController.delete(req, res));

export default AttributesRouter;