import { AbstractRepository } from "./AbstractRepository.js";
import User from "../models/User.js";

class UserRepository extends AbstractRepository<User> {
  constructor() {
    super("users");
  }
};

export default UserRepository;