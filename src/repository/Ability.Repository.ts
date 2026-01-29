import {AbstractRepository} from "./AbstractRepository";
import Ability from "../models/Ability.js"

class AbilityRepository extends AbstractRepository<Ability> {
    constructor () {
        super("Ability")
    };
};

export default AbilityRepository