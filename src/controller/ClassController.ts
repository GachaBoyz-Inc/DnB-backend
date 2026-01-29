import ClassService from "../service/ClassService.js";
import type { Response, Request } from "express";

class ClassController {
  private ClassService: ClassService;

  constructor() {
    this.ClassService = new ClassService();
  }

  async getAllClass(req: Request, res: Response) {
    const data = await this.ClassService.getAllClass();
    res.status(data.status).json(data);
  }

  async getClassById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const data = await this.ClassService.getClassById(id);
    res.status(data.status).json(data);
  }

  async create(req: Request, res: Response) {
    const body = req.body;
    const data = await this.ClassService.create(body);
    res.status(data.status).json(data);
  }

  async update(req: Request, res: Response) {
    const id = Number(req.params.id);
    const body = req.body;
    const data = await this.ClassService.update(id, body);
    res.status(data.status).json(data);
  }

  async delete(req: Request, res: Response) {
    const id = Number(req.params.id);
    const data = await this.ClassService.delete(id);
    res.status(data.status).json(data);
  }

}

export default ClassController;