import type User from "../models/User.js";
import UserRepository from "../repository/UserRepository.js";
import type ResponseUtil from "../util/ResponseUtil.js";

class UserService {
  private userRepository: UserRepository = new UserRepository();

  async getAllUsers(): Promise<ResponseUtil<User[]>> {
    try {
      const users = await this.userRepository.findAll();
      return { data: users, status: 200 };
    } catch (error) {
      return { status: 500, message: "Erro interno do servidor" };
    }
  }

  async getUserById(id: number): Promise<ResponseUtil<User[]>> {
    try {
      const user = await this.userRepository.findById(id);

      if (user.length === 0) {
        return { status: 404, message: "Usuário não encontrado" };
      }

      return { data: user, status: 200 };
    } catch (error) {
      return { status: 500, message: "Erro interno do servidor" };
    }
  }

  async create(data: User): Promise<ResponseUtil<null>> {
    try {
      await this.userRepository.create(data);
      return { status: 200, message: "Usuário criado com sucesso" };
    } catch (error) {
      return { status: 500, message: "Erro interno do servidor" };
    }
  }

  async update(id: number, data: Partial<User>): Promise<ResponseUtil<null>> {
    try {
      const user = await this.userRepository.findById(id);

      if (user.length === 0) {
        return { status: 404, message: "Usuário não encontrado" };
      }

      await this.userRepository.update(id, data);
      return { status: 200, message: "Usuário atualizado com sucesso" };
    } catch (error) {
      return { status: 500, message: "Erro interno do servidor" };
    }
  }

  async delete(id: number): Promise<ResponseUtil<null>> {
    try {
      const user = await this.userRepository.findById(id);

      if (user.length === 0) {
        return { status: 404, message: "Usuário não encontrado" };
      }

      await this.userRepository.delete(id);
      return { status: 200, message: "Usuário deletado com sucesso" };
    } catch (error) {
      return { status: 500, message: "Erro interno do servidor" };
    }
  }

}

export default UserService;