import type Ability from "../models/Ability.js";
import AbilityRepository from "../repository/Ability.Repository.js";
import type ResponseUtil from "../util/ResponseUtil.js";

class AbilityService {
  private abilityRepository: AbilityRepository = new AbilityRepository();

  async getAllAbility(): Promise<ResponseUtil<Ability[]>> {
    try {
      const abilities = await this.abilityRepository.findAll();
      return { data: abilities, status: 200 };
    } catch (error) {
      return { status: 500, message: "Erro interno do servidor: " + error };
    }
  }

  async getAbilityById(id: number): Promise<ResponseUtil<Ability[]>> {
    try {
      const ability = await this.abilityRepository.findById(id);

      if (ability.length === 0) {
        return { status: 404, message: "Habilidade não encontrada." };
      }

      return { data: ability, status: 200 };
    } catch (error) {
      return { status: 500, message: "Erro interno do servidor: " + error };
    }
  }

  async create(data: Ability): Promise<ResponseUtil<null>> {
    try {
      await this.abilityRepository.create(data);
      return { status: 200, message: "Habilidade criada com sucesso" };
    } catch (error) {
      return { status: 500, message: "Erro interno do servidor: " + error };
    }
  }

  async update(id: number, data: Partial<Ability>): Promise<ResponseUtil<null>> {
    try {
      const ability = await this.abilityRepository.findById(id);

      if (ability.length === 0) {
        return { status: 404, message: "Habilidade não encontrada." };
      }

      await this.abilityRepository.update(id, data);
      return { status: 200, message: "Habilidade atualizada com sucesso." };
    } catch (error) {
      return { status: 500, message: "Erro interno do servidor: " + error };
    }
  }

  async delete(id: number): Promise<ResponseUtil<null>> {
    try {
      const ability = await this.abilityRepository.findById(id);

      if (ability.length === 0) {
        return { status: 404, message: "Habilidade não encontrada." };
      }

      await this.abilityRepository.delete(id);
      return { status: 200, message: "Habilidade deletada com sucesso." };
    } catch (error) {
      return { status: 500, message: "Erro interno do servidor: " + error };
    }
  }

}

export default AbilityService;