import { AbstractRepository } from "./AbstractRepository.js";
import Item from "../models/Item.js";

class ItemRepository extends AbstractRepository<Item> {
  protected transformRowToEntity(row: any): Item {
    return new Item(row.id, row.name, row.description, row.typem);
  }

  constructor() {
    super("item");
  }
};

export default ItemRepository;