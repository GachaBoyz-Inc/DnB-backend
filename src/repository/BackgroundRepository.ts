import { AbstractRepository } from "./AbstractRepository.js";
import Background from "../models/Background.js";

class BackgroundRepository extends AbstractRepository<Background> {
  protected transformRowToEntity(row: any): Background {
    return new Background(row.id, row.name, row.description, row.skills, row.equipment);
  }

  constructor() {
    super("background");
  }
};

export default BackgroundRepository;