import AttributesService from "../service/AttributesService.js";
import type { Response, Request } from "express";

class AttributesController {
  private AttributesService: AttributesService;

  constructor() {
    this.AttributesService = new AttributesService();
  }

  async getAllAttributes(req: Request, res: Response) {
    const data = await this.AttributesService.getAllAttributes();
    res.status(data.status).json(data);
  }

  async getAttributesById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const data = await this.AttributesService.getAttributesById(id);
    res.status(data.status).json(data);
  }

  async create(req: Request, res: Response) {
    const body = req.body;
    const data = await this.AttributesService.create(body);
    res.status(data.status).json(data);
  }

  async update(req: Request, res: Response) {
    const id = Number(req.params.id);
    const body = req.body;
    const data = await this.AttributesService.update(id, body);
    res.status(data.status).json(data);
  }

  async delete(req: Request, res: Response) {
    const id = Number(req.params.id);
    const data = await this.AttributesService.delete(id);
    res.status(data.status).json(data);
  }

}

export default AttributesController;