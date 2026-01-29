import type Attributes from "../models/Attributes.js";
import AttributesRepository from "../repository/AttributesRepository.js";
import type ResponseUtil from "../util/ResponseUtil.js";

class AttributesService {
  private AttributesRepository: AttributesRepository = new AttributesRepository();

  async getAllAttributes(): Promise<ResponseUtil<Attributes[]>> {
    try {
      const Attributess = await this.AttributesRepository.findAll();
      return { data: Attributess, status: 200 };
    } catch (error) {
      return { status: 500, message: "Erro interno do servidor" };
    }
  }

  async getAttributesById(id: number): Promise<ResponseUtil<Attributes[]>> {
    try {
      const Attributes = await this.AttributesRepository.findById(id);

      if (Attributes.length === 0) {
        return { status: 404, message: "Usuário não encontrado" };
      }

      return { data: Attributes, status: 200 };
    } catch (error) {
      return { status: 500, message: "Erro interno do servidor" };
    }
  }

  async create(data: Attributes): Promise<ResponseUtil<null>> {
    try {
      await this.AttributesRepository.create(data);
      return { status: 200, message: "Usuário criado com sucesso" };
    } catch (error) {
      return { status: 500, message: "Erro interno do servidor" };
    }
  }

  async update(id: number, data: Partial<Attributes>): Promise<ResponseUtil<null>> {
    try {
      const Attributes = await this.AttributesRepository.findById(id);

      if (Attributes.length === 0) {
        return { status: 404, message: "Usuário não encontrado" };
      }

      await this.AttributesRepository.update(id, data);
      return { status: 200, message: "Usuário atualizado com sucesso" };
    } catch (error) {
      return { status: 500, message: "Erro interno do servidor" };
    }
  }

  async delete(id: number): Promise<ResponseUtil<null>> {
    try {
      const Attributes = await this.AttributesRepository.findById(id);

      if (Attributes.length === 0) {
        return { status: 404, message: "Usuário não encontrado" };
      }

      await this.AttributesRepository.delete(id);
      return { status: 200, message: "Usuário deletado com sucesso" };
    } catch (error) {
      return { status: 500, message: "Erro interno do servidor" };
    }
  }

}

export default AttributesService;