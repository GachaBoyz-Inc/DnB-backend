import { Router } from "express";
import CharacterItemController from "../controller/CharacterItemController.js";

const characterItemController = new CharacterItemController();
const characterItemRouter = Router();

characterItemRouter.get("/getAllByCharacterId", (req, res) => characterItemController.getAllItemByCharacterId(req, res));

export default characterItemRouter;