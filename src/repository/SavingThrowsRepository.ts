import {AbstractRepository} from "./AbstractRepository";
import SavingThrows from "../models/SavingThrows"

class SavingThrowsRepository extends AbstractRepository<SavingThrows> {
    protected transformRowToEntity(row: any): SavingThrows {
        return new SavingThrows(row.id, row.strength, row.dexterity, row.intelligence, row.wisdom, row.charisma, row.constitution, row.characterId);
    }

    constructor () {
        super("savingThrows")
    };
};

export default SavingThrowsRepository