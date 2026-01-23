import ClassNames from "../models/enums/ClassNames.js"
import ComponentTypes from "./enums/ComponentTypes.js";
import SpellTypes from "./enums/SpellTypes.js";
import Spell from "./Spell.js";

class SpellAttack extends Spell {
    damage: string;

    constructor(id: number, name: string, description: string, componentTypes: ComponentTypes[], casting_time: string, duration: string, school: string, range: string, conjurationClass: ClassNames[], spellType: SpellTypes, damage: string) {
        super(id, name, description, componentTypes, casting_time, duration, school, range, conjurationClass, spellType);
        this.damage = damage;
    }

    getDamage() {
        return this.damage;
    }

    setDamage(damage: string) {
        this.damage = damage;
    }
}

export default SpellAttack 