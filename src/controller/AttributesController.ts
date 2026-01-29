import AttributesService from "../service/AttributesService.js";
import type { Response, Request } from "express";

class AttributesController {
  private attributesService: AttributesService;

  constructor() {
    this.attributesService = new AttributesService();
  }

  async getAllAttributes(req: Request, res: Response) {
    const data = await this.attributesService.getAllAttributes();
    res.status(data.status).json(data);
  }

  async getAttributesById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const data = await this.attributesService.getAttributesById(id);
    res.status(data.status).json(data);
  }

  async create(req: Request, res: Response) {
    const body = req.body;
    const data = await this.attributesService.create(body);
    res.status(data.status).json(data);
  }

  async update(req: Request, res: Response) {
    const id = Number(req.params.id);
    const body = req.body;
    const data = await this.attributesService.update(id, body);
    res.status(data.status).json(data);
  }

  async delete(req: Request, res: Response) {
    const id = Number(req.params.id);
    const data = await this.attributesService.delete(id);
    res.status(data.status).json(data);
  }

}

export default AttributesController;