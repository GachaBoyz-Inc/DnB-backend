import type Race from "../models/Race.js";
import RaceRepository from "../repository/RaceRepository.js";
import type ResponseUtil from "../util/ResponseUtil.js";

class RaceService {
  private raceRepository: RaceRepository = new RaceRepository();

  async getAllRaces(): Promise<ResponseUtil<Race[]>> {
    try {
      const race = await this.raceRepository.findAll();
      return { data: race, status: 200 };
    } catch (error) {
      return { status: 500, message: "Erro interno do servidor" };
    }
  }

  async getRaceById(id: number): Promise<ResponseUtil<Race[]>> {
    try {
      const race = await this.raceRepository.findById(id);

      if (race.length === 0) {
        return { status: 404, message: "Usuário não encontrado" };
      }

      return { data: race, status: 200 };
    } catch (error) {
      return { status: 500, message: "Erro interno do servidor" };
    }
  }

  async create(data: Race): Promise<ResponseUtil<null>> {
    try {
      await this.raceRepository.create(data);
      return { status: 200, message: "Usuário criado com sucesso" };
    } catch (error) {
      return { status: 500, message: "Erro interno do servidor" };
    }
  }

  async update(id: number, data: Partial<Race>): Promise<ResponseUtil<null>> {
    try {
      const user = await this.raceRepository.findById(id);

      if (user.length === 0) {
        return { status: 404, message: "Usuário não encontrado" };
      }

      await this.raceRepository.update(id, data);
      return { status: 200, message: "Usuário atualizado com sucesso" };
    } catch (error) {
      return { status: 500, message: "Erro interno do servidor" };
    }
  }

  async delete(id: number): Promise<ResponseUtil<null>> {
    try {
      const user = await this.raceRepository.findById(id);

      if (user.length === 0) {
        return { status: 404, message: "Usuário não encontrado" };
      }

      await this.raceRepository.delete(id);
      return { status: 200, message: "Usuário deletado com sucesso" };
    } catch (error) {
      return { status: 500, message: "Erro interno do servidor" };
    }
  }

}

export default RaceService;