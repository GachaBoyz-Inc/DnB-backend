import { AbstractRepository } from "./AbstractRepository.js";
import dbConnection from "../config/db.js";
import Item from "../models/Item.js"

class ItemRepository extends AbstractRepository<Item> {
  protected transformRowToEntity(row: any): Item {
    return new Item(row.id, row.name, row.description, row.type);
  }

  constructor() {
    super("item");
  }

  async getAllItemsByCharacterId(character_id:number): Promise<Item[]> {
    const [rows] = await dbConnection.query("SELECT * FROM character_items WHERE character_id = ?", [character_id])
    return rows as Item[];
  }
};

export default ItemRepository;