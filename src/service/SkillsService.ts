import type Skills from "../models/Skills.js";
import SkillsRepository from "../repository/SkillsRepository.js";
import type ResponseUtil from "../util/ResponseUtil.js";

class SkillsService {
  private skillsRepository: SkillsRepository = new SkillsRepository();

  async getAll(): Promise<ResponseUtil<Skills[]>> {
    try {
      const skills = await this.skillsRepository.findAll();
      return { data: skills, status: 200 };
    } catch (error) {
      return { status: 500, message: "Erro interno do servidor" };
    }
  }

  async getSkillsById(id: number): Promise<ResponseUtil<Skills[]>> {
    try {
      const skills = await this.skillsRepository.findById(id);

      if (skills.length === 0) {
        return { status: 404, message: "Perícias não encontradas" };
      }

      return { data: skills, status: 200 };
    } catch (error) {
      return { status: 500, message: "Erro interno do servidor" };
    }
  }

  async create(data: Skills): Promise<ResponseUtil<null>> {
    try {
      await this.skillsRepository.create(data);
      return { status: 200, message: "Perícias criadas com sucesso" };
    } catch (error) {
      return { status: 500, message: "Erro interno do servidor" };
    }
  }

  async update(id: number, data: Partial<Skills>): Promise<ResponseUtil<null>> {
    try {
      const skills = await this.skillsRepository.findById(id);

      if (skills.length === 0) {
        return { status: 404, message: "Perícias não encontradas" };
      }

      await this.skillsRepository.update(id, data);
      return { status: 200, message: "Perícias atualizadas com sucesso" };
    } catch (error) {
      return { status: 500, message: "Erro interno do servidor" };
    }
  }

  async delete(id: number): Promise<ResponseUtil<null>> {
    try {
      const skills = await this.skillsRepository.findById(id);

      if (skills.length === 0) {
        return { status: 404, message: "Perícias não encontradas" };
      }

      await this.skillsRepository.delete(id);
      return { status: 200, message: "Perícias deletadas com sucesso" };
    } catch (error) {
      return { status: 500, message: "Erro interno do servidor" };
    }
  }

}

export default SkillsService;