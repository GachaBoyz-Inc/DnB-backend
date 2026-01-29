import SkillsService from "../service/SkillsService.js";
import type { Response, Request } from "express";

class SkillsController {
  private skillsService: SkillsService;

  constructor() {
    this.skillsService = new SkillsService();
  }

  async getAll(req: Request, res: Response) {
    const data = await this.skillsService.getAll();
    res.status(data.status).json(data);
  }

  async getSkillsById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const data = await this.skillsService.getSkillsById(id);
    res.status(data.status).json(data);
  }

  async create(req: Request, res: Response) {
    const body = req.body;
    const data = await this.skillsService.create(body);
    res.status(data.status).json(data);
  }

  async update(req: Request, res: Response) {
    const id = Number(req.params.id);
    const body = req.body;
    const data = await this.skillsService.update(id, body);
    res.status(data.status).json(data);
  }

  async delete(req: Request, res: Response) {
    const id = Number(req.params.id);
    const data = await this.skillsService.delete(id);
    res.status(data.status).json(data);
  }

}

export default SkillsController;