import type Attributes from "../models/Attributes.js";
import AttributesRepository from "../repository/AttributesRepository.js";
import type ResponseUtil from "../util/ResponseUtil.js";

class AttributesService {
  private attributesRepository: AttributesRepository = new AttributesRepository();

  async getAllAttributes(): Promise<ResponseUtil<Attributes[]>> {
    try {
      const Attributess = await this.attributesRepository.findAll();
      return { data: Attributess, status: 200 };
    } catch (error) {
      return { status: 500, message: "Erro interno do servidor" };
    }
  }

  async getAttributesById(id: number): Promise<ResponseUtil<Attributes[]>> {
    try {
      const Attributes = await this.attributesRepository.findById(id);

      if (Attributes.length === 0) {
        return { status: 404, message: "Não foi possível encontrar os atributos." };
      }

      return { data: Attributes, status: 200 };
    } catch (error) {
      return { status: 500, message: "Erro interno do servidor" };
    }
  }

  async create(data: Attributes): Promise<ResponseUtil<null>> {
    try {
      await this.attributesRepository.create(data);
      return { status: 200, message: "Atributos criados com sucesso." };
    } catch (error) {
      return { status: 500, message: "Erro interno do servidor" };
    }
  }

  async update(id: number, data: Partial<Attributes>): Promise<ResponseUtil<null>> {
    try {
      const Attributes = await this.attributesRepository.findById(id);

      if (Attributes.length === 0) {
        return { status: 404, message: "Não foi possível encontrar os atributos." };
      }

      await this.attributesRepository.update(id, data);
      return { status: 200, message: "Atributos atualizados com sucesso." };
    } catch (error) {
      return { status: 500, message: "Erro interno do servidor" };
    }
  }

  async delete(id: number): Promise<ResponseUtil<null>> {
    try {
      const Attributes = await this.attributesRepository.findById(id);

      if (Attributes.length === 0) {
        return { status: 404, message: "Não foi possível encontrar os atributos." };
      }

      await this.attributesRepository.delete(id);
      return { status: 200, message: "Atributos deletados com sucesso" };
    } catch (error) {
      return { status: 500, message: "Erro interno do servidor" };
    }
  }

}

export default AttributesService;