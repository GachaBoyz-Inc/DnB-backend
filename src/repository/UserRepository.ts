import { AbstractRepository } from "./AbstractRepository.js";
import dbConnection from "../config/db.js";
import User from "../models/User.js";

class UserRepository extends AbstractRepository<User> {
  constructor() {
    super("users");
  }

  protected transformRowToEntity(row: any): User {
    return new User(row.id, row.name, row.password, row.email);
  }

  async findUserByEmail(email: string): Promise<User[]> {
    const [rows] = await dbConnection.query<[]>("SELECT * FROM users WHERE email = ?", [email]);
    return rows.map(row => this.transformRowToEntity(row));
  }
};

export default UserRepository;