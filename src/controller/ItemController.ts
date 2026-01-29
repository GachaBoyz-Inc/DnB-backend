import ItemService from "../service/ItemService.js";
import type { Response, Request } from "express";

class ItemController {
  private itemService: ItemService;

  constructor() {
    this.itemService = new ItemService();
  }

  async getAllItems(req: Request, res: Response) {
    const data = await this.itemService.getAllRaces();
    res.status(data.status).json(data);
  }

  async getItemById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const data = await this.itemService.getRaceById(id);
    res.status(data.status).json(data);
  }

  async create(req: Request, res: Response) {
    const body = req.body;
    const data = await this.itemService.create(body);
    res.status(data.status).json(data);
  }

  async update(req: Request, res: Response) {
    const id = Number(req.params.id);
    const body = req.body;
    const data = await this.itemService.update(id, body);
    res.status(data.status).json(data);
  }

  async delete(req: Request, res: Response) {
    const id = Number(req.params.id);
    const data = await this.itemService.delete(id);
    res.status(data.status).json(data);
  }

}

export default ItemController;