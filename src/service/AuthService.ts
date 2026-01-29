import User from "../models/User.js";
import UserRepository from "../repository/UserRepository.js";
import type ResponseUtil from "../util/ResponseUtil.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import type RegisterUserDTO from "../dtos/RegisterUserDTO.js";
import type LoginUserDTO from "../dtos/LoginUserDTO.js";

class AuthService {
  private userRepository: UserRepository = new UserRepository();

  async login(data: LoginUserDTO): Promise<ResponseUtil<string>> {
    try {
      const user = await this.userRepository.findUserByEmail(data.email);

      if (user.length === 0) {
        return { status: 404, message: "Usuário não encontrado. Tente novamente com novas credenciais ou crie uma conta." };
      }

      if (await bcrypt.compare(data.password, user[0].getUserPassword()) === false) {
        return { status: 401, message: "Senha incorreta. Tente novamente." };
      }

      const token = jwt.sign({ id: user[0].getUserId(), name: user[0].getUserName(), email: user[0].getUserEmail() }, "token-secret-key", { expiresIn: "4h" });
      return { data: token, status: 200 };
    } catch (error) {
      return { status: 401, message: "Falha na autenticação: " + error };
    }
  }

  async register(data: RegisterUserDTO): Promise<ResponseUtil<null>> {
    try {
      const user = await this.userRepository.findUserByEmail(data.email);

      if (user.length > 0) {
        return { status: 409, message: "Email já está em uso. Tente novamente com um novo email." };
      }

      if (!data.password.length) {
        return { status: 400, message: "Senha inválida. Preencha com uma senha válida." };
      }

      const hashedPassword = await bcrypt.hash(data.password, 10);
      data.password = hashedPassword;

      const newUser = new User(null, data.name, data.password, data.email);
      await this.userRepository.create(newUser);
      return { status: 200, message: "Usuário criado com sucesso" };
    } catch (error) {
      return { status: 500, message: "Erro interno do servidor: " + error };
    }
  }

}

export default AuthService;