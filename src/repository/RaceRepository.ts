import { AbstractRepository } from "./AbstractRepository.js";
import Race from "../models/Race.js";

class RaceRepository extends AbstractRepository<Race> {
  protected transformRowToEntity(row: any): Race {
    return new Race(row.id, row.name, row.description, row.skills, row.ability);
  }

  constructor() {
    super("race");
  }
};

export default RaceRepository;