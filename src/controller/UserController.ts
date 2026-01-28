import UserService from "../service/UserService.js";
import type { Response, Request } from "express";

class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async getAllUsers(req: Request, res: Response) {
    const data = await this.userService.getAllUsers();
    res.status(data.status).json(data);
  }

  async getUserById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const data = await this.userService.getUserById(id);
    res.status(data.status).json(data);
  }

  async create(req: Request, res: Response) {
    const body = req.body;
    const data = await this.userService.create(body);
    res.status(data.status).json(data);
  }

  async update(req: Request, res: Response) {
    const id = Number(req.params.id);
    const body = req.body;
    const data = await this.userService.update(id, body);
    res.status(data.status).json(data);
  }

  async delete(req: Request, res: Response) {
    const id = Number(req.params.id);
    const data = await this.userService.delete(id);
    res.status(data.status).json(data);
  }

}

export default UserController;