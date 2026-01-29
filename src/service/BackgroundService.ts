import type Background from "../models/Background.js";
import BackgroundRepository from "../repository/BackgroundRepository.js";
import type ResponseUtil from "../util/ResponseUtil.js";

class BackgroundService {
  private BackgroundRepository: BackgroundRepository = new BackgroundRepository();

  async getAllBackgrounds(): Promise<ResponseUtil<Background[]>> {
    try {
      const backgrounds = await this.BackgroundRepository.findAll();
      return { data: backgrounds, status: 200 };
    } catch (error) {
      return { status: 500, message: "Erro interno do servidor" };
    }
  }

  async getBackgroundById(id: number): Promise<ResponseUtil<Background[]>> {
    try {
      const background = await this.BackgroundRepository.findById(id);

      if (background.length === 0) {
        return { status: 404, message: "Não encontrado" };
      }

      return { data: background, status: 200 };
    } catch (error) {
      return { status: 500, message: "Erro interno do servidor" };
    }
  }

  async create(data: Background): Promise<ResponseUtil<null>> {
    try {
      await this.BackgroundRepository.create(data);
      return { status: 200, message: "" };
    } catch (error) {
      return { status: 500, message: "Erro interno do servidor" };
    }
  }

  async update(id: number, data: Partial<Background>): Promise<ResponseUtil<null>> {
    try {
      const background = await this.BackgroundRepository.findById(id);

      if (background.length === 0) {
        return { status: 404, message: "" };
      }

      await this.BackgroundRepository.update(id, data);
      return { status: 200, message: "" };
    } catch (error) {
      return { status: 500, message: "Erro interno do servidor" };
    }
  }

  async delete(id: number): Promise<ResponseUtil<null>> {
    try {
      const background = await this.BackgroundRepository.findById(id);

      if (background.length === 0) {
        return { status: 404, message: "Usuário não encontrado" };
      }

      await this.BackgroundRepository.delete(id);
      return { status: 200, message: "" };
    } catch (error) {
      return { status: 500, message: "Erro interno do servidor" };
    }
  }

}

export default BackgroundService;