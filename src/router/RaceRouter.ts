import { Router } from "express";
import RaceController from "../controller/RaceController.js";

const raceController = new RaceController();
const raceRouter = Router();

raceRouter.get("/getAll", (req, res) => raceController.getAllRaces(req, res));
raceRouter.get("/getById/:id", (req, res) => raceController.getRaceById(req, res));
raceRouter.post("/create", (req, res) => raceController.create(req, res));
raceRouter.patch("/update/:id", (req, res) => raceController.update(req, res));
raceRouter.delete("/delete/:id", (req, res) => raceController.delete(req, res));

export default raceRouter;