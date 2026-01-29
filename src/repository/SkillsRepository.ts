import {AbstractRepository} from "./AbstractRepository.js";
import Skills from "../models/Skills.js"

class SkillsRepository extends AbstractRepository<Skills> {
    protected transformRowToEntity(row: any): Skills {
        return new Skills(row.id, row.acrobatics, row.arcana, row.athletics, row.performance, row.deception, row.stealth, row.history, row.intimidation, row.insight, row.investigation, row.animalHandling, row.medicine, row.nature, row.perception, row.persuasion, row.sleightOfHand, row.religion, row.survival);
    }

    constructor () {
        super("skills")
    };
};

export default SkillsRepository