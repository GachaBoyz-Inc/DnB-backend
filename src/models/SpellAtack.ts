import Class from "./Class";
import ComponentTypes from "./enums/ComponentTypes";
import SpellTypes from "./enums/SpellTypes";
import Spell from "./Spell";

class SpellAttack extends Spell {
    damage: string;

    constructor(id: number, name: string, description: string, componentTypes: ComponentTypes[], casting_time: string, duration: string, school: string, range: string, conjurationClass: Class[], spellType: SpellTypes, damage: string) {
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