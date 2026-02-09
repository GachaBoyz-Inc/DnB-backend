import CharacterItemService from "../service/CharacterItemService";
import type { Response, Request } from "express";

class CharacterItemController {
  private CharacterItemService: CharacterItemService;

  constructor() {
    this.CharacterItemService = new CharacterItemService();
  }

  async getAllItemByCharacterId(req: Request, res: Response) {
    const character_id = Number(req.params.id)
    const data = await this.CharacterItemService.getAllItemsByCharacterId(character_id);
    res.status(data.status).json(data);
  }
}

export default CharacterItemController;