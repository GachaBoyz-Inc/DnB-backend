import { AbstractRepository } from "./AbstractRepository.js";
import Race from "../models/Race.js";

class RaceRepository extends AbstractRepository<Race> {
  constructor() {
    super("race");
  }
};

export default RaceRepository;