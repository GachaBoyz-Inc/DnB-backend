import RaceService from "../service/RaceService.js";
import type { Response, Request } from "express";

class RaceController {
  private raceService: RaceService;

  constructor() {
    this.raceService = new RaceService();
  }

  async getAllRaces(req: Request, res: Response) {
    const data = await this.raceService.getAllRaces();
    res.status(data.status).json(data);
  }

  async getRaceById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const data = await this.raceService.getRaceById(id);
    res.status(data.status).json(data);
  }

  async create(req: Request, res: Response) {
    const body = req.body;
    const data = await this.raceService.create(body);
    res.status(data.status).json(data);
  }

  async update(req: Request, res: Response) {
    const id = Number(req.params.id);
    const body = req.body;
    const data = await this.raceService.update(id, body);
    res.status(data.status).json(data);
  }

  async delete(req: Request, res: Response) {
    const id = Number(req.params.id);
    const data = await this.raceService.delete(id);
    res.status(data.status).json(data);
  }

}

export default RaceController;