import {AbstractRepository} from "./AbstractRepository";
import Attributes from "../models/Attributes"

class AttributesRepository extends AbstractRepository<Attributes> {
    protected transformRowToEntity(row: any): Attributes {
        return new Attributes(row.id, row.strength, row.dexterity, row.constitution, row.intelligence, row.wisdom, row.charisma);
    }

    constructor () {
        super("attributes")
    };
};

export default AttributesRepository