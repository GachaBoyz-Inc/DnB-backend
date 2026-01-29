import { AbstractRepository } from "./AbstractRepository.js";
import Class from "../models/Class.js";

class ClassRepository extends AbstractRepository<Class> {
    constructor() {
        super("class");
    }
};

export default ClassRepository;