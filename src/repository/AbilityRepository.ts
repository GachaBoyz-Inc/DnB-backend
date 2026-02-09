import {AbstractRepository} from "./AbstractRepository.js";
import Ability from "../models/Ability.js"

class AbilityRepository extends AbstractRepository<Ability> {
    protected transformRowToEntity(row: any): Ability {
        return new Ability(row.id, row.name, row.description, row.type);
    }

    constructor () {
        super("ability")
    };
};

export default AbilityRepository