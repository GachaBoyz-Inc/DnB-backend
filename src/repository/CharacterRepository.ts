import { AbstractRepository } from "./AbstractRepository";
import Character from "../models/Character";
import dbConnection from "../config/db.js";

export class CharacterRepository extends AbstractRepository<Character> {
  constructor() {
    super("characters");
  }

  async getAllYourCharacters(user_id: number): Promise<Character[]> {
    const [rows] = await dbConnection.query("SELECT * FROM character WHERE user_id = ?", [user_id])
    return rows as Character[];
  }
}
