import AbilityService from "../service/AbilityService.js";
import type { Response, Request } from "express";

class AbilityController {
  private AbilityService: AbilityService;

  constructor() {
    this.AbilityService = new AbilityService();
  }

  async getAllAbility(req: Request, res: Response) {
    const data = await this.AbilityService.getAllAbility();
    res.status(data.status).json(data);
  }

  async getAbilityById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const data = await this.AbilityService.getAbilityById(id);
    res.status(data.status).json(data);
  }

  async create(req: Request, res: Response) {
    const body = req.body;
    const data = await this.AbilityService.create(body);
    res.status(data.status).json(data);
  }

  async update(req: Request, res: Response) {
    const id = Number(req.params.id);
    const body = req.body;
    const data = await this.AbilityService.update(id, body);
    res.status(data.status).json(data);
  }

  async delete(req: Request, res: Response) {
    const id = Number(req.params.id);
    const data = await this.AbilityService.delete(id);
    res.status(data.status).json(data);
  }

}

export default AbilityController;