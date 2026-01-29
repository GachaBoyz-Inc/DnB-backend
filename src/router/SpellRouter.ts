import { Router } from 'express'
import SpellController from '../controller/SpellController'

const spellController = new SpellController()
const spellRouter = Router();


spellRouter.get("/getAll", (req, res) => spellController.getAll(req, res));
spellRouter.get("/getById/:id", (req, res) => spellController.getById(req, res));
spellRouter.post("/create", (req, res) => spellController.create(req, res));
spellRouter.put("/update/:id", (req, res) => spellController.update(req, res));
spellRouter.delete("/delete/:id", (req, res) => spellController.delete(req, res));

export default spellRouter;