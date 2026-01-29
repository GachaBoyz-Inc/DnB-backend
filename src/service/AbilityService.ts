import type Ability from "../models/Ability.js";
import AbilityRepository from "../repository/Ability.Repository.js";
import type ResponseUtil from "../util/ResponseUtil.js";

class AbilityService {
  private AbilityRepository: AbilityRepository = new AbilityRepository();

  async getAllAbility(): Promise<ResponseUtil<Ability[]>> {
    try {
      const Abilities = await this.AbilityRepository.findAll();
      return { data: Abilities, status: 200 };
    } catch (error) {
      return { status: 500, message: "Erro interno do servidor" };
    }
  }

  async getAbilityById(id: number): Promise<ResponseUtil<Ability[]>> {
    try {
      const Ability = await this.AbilityRepository.findById(id);

      if (Ability.length === 0) {
        return { status: 404, message: "Usuário não encontrado" };
      }

      return { data: Ability, status: 200 };
    } catch (error) {
      return { status: 500, message: "Erro interno do servidor" };
    }
  }

  async create(data: Ability): Promise<ResponseUtil<null>> {
    try {
      await this.AbilityRepository.create(data);
      return { status: 200, message: "Usuário criado com sucesso" };
    } catch (error) {
      return { status: 500, message: "Erro interno do servidor" };
    }
  }

  async update(id: number, data: Partial<Ability>): Promise<ResponseUtil<null>> {
    try {
      const Ability = await this.AbilityRepository.findById(id);

      if (Ability.length === 0) {
        return { status: 404, message: "Usuário não encontrado" };
      }

      await this.AbilityRepository.update(id, data);
      return { status: 200, message: "Usuário atualizado com sucesso" };
    } catch (error) {
      return { status: 500, message: "Erro interno do servidor" };
    }
  }

  async delete(id: number): Promise<ResponseUtil<null>> {
    try {
      const Ability = await this.AbilityRepository.findById(id);

      if (Ability.length === 0) {
        return { status: 404, message: "Usuário não encontrado" };
      }

      await this.AbilityRepository.delete(id);
      return { status: 200, message: "Usuário deletado com sucesso" };
    } catch (error) {
      return { status: 500, message: "Erro interno do servidor" };
    }
  }

}

export default AbilityService;