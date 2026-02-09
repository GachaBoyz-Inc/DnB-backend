import type Item from "../models/Item.js";
import ItemRepository from "../repository/CharacterItemsRepository.js";
import type ResponseUtil from "../util/ResponseUtil.js";

class ItemService {
  private ItemRepository: ItemRepository = new ItemRepository();

  async getAllItemsByCharacterId(character_id:number): Promise<ResponseUtil<Item[]>> {
    try {
      const items = await this.ItemRepository.getAllItemsByCharacterId(character_id);
      return { data: items, status: 200 };
    } catch (error) {
      return { status: 500, message: "Erro interno do servidor: " + error };
    }
  }
}

export default ItemService;