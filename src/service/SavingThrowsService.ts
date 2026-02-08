import type SavingThrows from "../models/SavingThrows.js";
import SavingThrowsRepository from "../repository/SavingThrowsRepository.js";
import type ResponseUtil from "../util/ResponseUtil.js";

class SavingThrowsService {
  private SavingThrowsRepository: SavingThrowsRepository = new SavingThrowsRepository();

  async getAllSavingThrows(): Promise<ResponseUtil<SavingThrows[]>> {
    try {
      const SavingThrowss = await this.SavingThrowsRepository.findAll();
      return { data: SavingThrowss, status: 200 };
    } catch (error) {
      return { status: 500, message: "Erro interno do servidor" };
    }
  }

  async getSavingThrowsById(id: number): Promise<ResponseUtil<SavingThrows[]>> {
    try {
      const SavingThrows = await this.SavingThrowsRepository.findById(id);

      if (SavingThrows.length === 0) {
        return { status: 404, message: "Não foi possível encontrar os atributos." };
      }

      return { data: SavingThrows, status: 200 };
    } catch (error) {
      return { status: 500, message: "Erro interno do servidor" };
    }
  }

  async create(data: SavingThrows): Promise<ResponseUtil<null>> {
    try {
      await this.SavingThrowsRepository.create(data);
      return { status: 200, message: "Atributos criados com sucesso." };
    } catch (error) {
      return { status: 500, message: "Erro interno do servidor" };
    }
  }

  async update(id: number, data: Partial<SavingThrows>): Promise<ResponseUtil<null>> {
    try {
      const SavingThrows = await this.SavingThrowsRepository.findById(id);

      if (SavingThrows.length === 0) {
        return { status: 404, message: "Não foi possível encontrar os atributos." };
      }

      await this.SavingThrowsRepository.update(id, data);
      return { status: 200, message: "Atributos atualizados com sucesso." };
    } catch (error) {
      return { status: 500, message: "Erro interno do servidor" };
    }
  }

  async delete(id: number): Promise<ResponseUtil<null>> {
    try {
      const SavingThrows = await this.SavingThrowsRepository.findById(id);

      if (SavingThrows.length === 0) {
        return { status: 404, message: "Não foi possível encontrar os atributos." };
      }

      await this.SavingThrowsRepository.delete(id);
      return { status: 200, message: "Atributos deletados com sucesso" };
    } catch (error) {
      return { status: 500, message: "Erro interno do servidor" };
    }
  }

}

export default SavingThrowsService;