import SavingThrowsService from "../service/SavingThrowsService.js";
import type { Response, Request } from "express";

class SavingThrowsController {
  private SavingThrowsService: SavingThrowsService;

  constructor() {
    this.SavingThrowsService = new SavingThrowsService();
  }

  async getAllSavingThrows(req: Request, res: Response) {
    const data = await this.SavingThrowsService.getAllSavingThrows();
    res.status(data.status).json(data);
  }

  async getSavingThrowsById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const data = await this.SavingThrowsService.getSavingThrowsById(id);
    res.status(data.status).json(data);
  }

  async create(req: Request, res: Response) {
    const body = req.body;
    const data = await this.SavingThrowsService.create(body);
    res.status(data.status).json(data);
  }

  async update(req: Request, res: Response) {
    const id = Number(req.params.id);
    const body = req.body;
    const data = await this.SavingThrowsService.update(id, body);
    res.status(data.status).json(data);
  }

  async delete(req: Request, res: Response) {
    const id = Number(req.params.id);
    const data = await this.SavingThrowsService.delete(id);
    res.status(data.status).json(data);
  }

}

export default SavingThrowsController;