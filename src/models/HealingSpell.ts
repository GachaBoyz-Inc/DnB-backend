import Spell from "./Spell.js"
import SpellTypes from "./enums/SpellTypes.js"
import ClassNames from "./enums/ClassNames.js"
import ComponentTypes from "./enums/ComponentTypes.js"

class HealingSpell extends Spell {
    healingAmount: string

    constructor(id: number, name: string, description: string, componentTypes: ComponentTypes[], casting_time:string, duration: string, resistance: string, school: string, range: string, conjurationClass: ClassNames[], spellType: SpellTypes, healingAmount: string) {
        super(id, name, description, componentTypes, casting_time, duration, resistance, school, range, conjurationClass, spellType);
        this.healingAmount = healingAmount;
    }

    getHealingAmount(): string {
        return this.healingAmount;
    }

    setHealingAmount(healingAmount: string) {
        this.healingAmount = healingAmount;
    }
} 