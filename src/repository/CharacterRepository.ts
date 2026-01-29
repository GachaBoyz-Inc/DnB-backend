import { AbstractRepository } from "./AbstractRepository";
import Character from "../models/Character";
import dbConnection from "../config/db.js";

export class CharacterRepository extends AbstractRepository<Character> {
  protected transformRowToEntity(row: any): Character {
    return new Character(row.id, row.name, row.backstory, row.appearance, row.ideals, row.objectives, row.bonds, row.flaws, row.personalityTraits, row.raceId, row.classId, row.backgroundId, row.attributesId, row.skillsId, row.userId, row.playerName, row.level, row.proficiencyBonus, row.armorClass, row.initiative, row.speed, row.maxHp, row.currentHp, row.tempHp);
  }

  constructor() {
    super("characters");
  }

  async getAllYourCharacters(user_id: number): Promise<Character[]> {
    const [rows] = await dbConnection.query("SELECT * FROM character WHERE user_id = ?", [user_id])
    return rows as Character[];
  }
}
