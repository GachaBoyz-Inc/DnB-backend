import BackgroundService from "../service/BackgroundService.js";
import type { Response, Request } from "express";

class BackgroundController {
  private backgroundService: BackgroundService;

  constructor() {
    this.backgroundService = new BackgroundService();
  }

  async getAllBackgrounds(req: Request, res: Response) {
    const data = await this.backgroundService.getAllBackgrounds();
    res.status(data.status).json(data);
  }

  async getBackgroundById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const data = await this.backgroundService.getBackgroundById(id);
    res.status(data.status).json(data);
  }

  async create(req: Request, res: Response) {
    const body = req.body;
    const data = await this.backgroundService.create(body);
    res.status(data.status).json(data);
  }

  async update(req: Request, res: Response) {
    const id = Number(req.params.id);
    const body = req.body;
    const data = await this.backgroundService.update(id, body);
    res.status(data.status).json(data);
  }

  async delete(req: Request, res: Response) {
    const id = Number(req.params.id);
    const data = await this.backgroundService.delete(id);
    res.status(data.status).json(data);
  }

}

export default BackgroundController;