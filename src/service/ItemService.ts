import type Item from "../models/Item.js";
import ItemRepository from "../repository/ItemRepository.js";
import type ResponseUtil from "../util/ResponseUtil.js";

class ItemService {
  private itemRepository: ItemRepository = new ItemRepository();

  async getAllRaces(): Promise<ResponseUtil<Item[]>> {
    try {
      const item = await this.itemRepository.findAll();
      return { data: item, status: 200 };
    } catch (error) {
      return { status: 500, message: "Erro interno do servidor" };
    }
  }

  async getRaceById(id: number): Promise<ResponseUtil<Item[]>> {
    try {
      const item = await this.itemRepository.findById(id);

      if (item.length === 0) {
        return { status: 404, message: "Item não encontrado" };
      }

      return { data: item, status: 200 };
    } catch (error) {
      return { status: 500, message: "Erro interno do servidor" };
    }
  }

  async create(data: Item): Promise<ResponseUtil<null>> {
    try {
      await this.itemRepository.create(data);
      return { status: 200, message: "Item criado com sucesso" };
    } catch (error) {
      console.log(error)
      return { status: 500, message: "Erro interno do servidor" };
    }
  }

  async update(id: number, data: Partial<Item>): Promise<ResponseUtil<null>> {
    try {
      const item = await this.itemRepository.findById(id);

      if (item.length === 0) {
        return { status: 404, message: "Item não encontrado" };
      }

      await this.itemRepository.update(id, data);
      return { status: 200, message: "Item atualizado com sucesso" };
    } catch (error) {
      return { status: 500, message: "Erro interno do servidor" };
    }
  }

  async delete(id: number): Promise<ResponseUtil<null>> {
    try {
      const item = await this.itemRepository.findById(id);

      if (item.length === 0) {
        return { status: 404, message: "Item não encontrado" };
      }

      await this.itemRepository.delete(id);
      return { status: 200, message: "Item deletado com sucesso" };
    } catch (error) {
      return { status: 500, message: "Erro interno do servidor" };
    }
  }

}

export default ItemService;