import dbConnection from "../config/db";
import { AbstractRepository } from "./AbstractRepository";
import Spell from "../models/Spell"

class SpellRepository extends AbstractRepository<Spell> {
    constructor() {
        super("spell")
    }
}
export default SpellRepository