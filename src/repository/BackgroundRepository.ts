import { AbstractRepository } from "./AbstractRepository.js";
import Background from "../models/Background.js";

class BackgroundRepository extends AbstractRepository<Background> {
  constructor() {
    super("background");
  }
};

export default BackgroundRepository;