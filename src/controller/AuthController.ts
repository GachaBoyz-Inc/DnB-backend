import AuthService from "../service/AuthService.js";
import type { Response, Request } from "express";

class AuthController {
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  async login(req: Request, res: Response) {
    const body = req.body;
    const data = await this.authService.login(body);
    res.status(data.status).json(data);
  }

  async register(req: Request, res: Response) {
    const body = req.body;
    const data = await this.authService.register(body);
    res.status(data.status).json(data);
  }

}

export default AuthController;