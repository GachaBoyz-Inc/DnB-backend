import { Router } from "express";
import AbilityController from "../controller/AbilityController.js";

const abilityController = new AbilityController();
const abilityRouter = Router();

abilityRouter.get("/getAll", (req, res) => abilityController.getAllAbility(req, res));
abilityRouter.get("/getById/:id", (req, res) => abilityController.getAbilityById(req, res));
abilityRouter.post("/create", (req, res) => abilityController.create(req, res));
abilityRouter.patch("/update/:id", (req, res) => abilityController.update(req, res));
abilityRouter.delete("/delete/:id", (req, res) => abilityController.delete(req, res));

export default abilityRouter;