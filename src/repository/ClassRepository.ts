import { AbstractRepository } from "./AbstractRepository.js";
import Class from "../models/Class.js";

class ClassRepository extends AbstractRepository<Class> {
    protected transformRowToEntity(row: any): Class {
        return new Class(row.id, row.name, row.description, row.hpDice, row.proficiencies, row.skills, row.equipment);
    }

    constructor() {
        super("class");
    }
};

export default ClassRepository;