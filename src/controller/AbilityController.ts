import AbilityService from "../service/AbilityService.js";
import type { Response, Request } from "express";

class AbilityController {
  private abilityService: AbilityService;

  constructor() {
    this.abilityService = new AbilityService();
  }

  async getAllAbility(req: Request, res: Response) {
    const data = await this.abilityService.getAllAbility();
    res.status(data.status).json(data);
  }

  async getAbilityById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const data = await this.abilityService.getAbilityById(id);
    res.status(data.status).json(data);
  }

  async create(req: Request, res: Response) {
    const body = req.body;
    const data = await this.abilityService.create(body);
    res.status(data.status).json(data);
  }

  async update(req: Request, res: Response) {
    const id = Number(req.params.id);
    const body = req.body;
    const data = await this.abilityService.update(id, body);
    res.status(data.status).json(data);
  }

  async delete(req: Request, res: Response) {
    const id = Number(req.params.id);
    const data = await this.abilityService.delete(id);
    res.status(data.status).json(data);
  }

}

export default AbilityController;