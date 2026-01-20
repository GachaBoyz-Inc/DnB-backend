import Ability from "./Ability";
import ComponentTypes from "./enums/ComponentTypes"
import Class from "./Class"
import SpellTypes from "./enums/SpellTypes";
import AbilityTypes from "./enums/AbilityTypes";

class Spell extends Ability {
    private componentTypes: ComponentTypes[] 
    private casting_time: string 
    private duration: string
    private resistance: string = ''
    private school: string 
    private range: string 
    private conjurationClass: Class[]
    private spellType: SpellTypes

    constructor(id: number, name: string, description: string, componentTypes: ComponentTypes[], casting_time: string, duration: string, school: string, range: string, conjurationClass: Class[], spellType: SpellTypes) {
        super(id, name, description, AbilityTypes.SPELL);
        this.componentTypes = componentTypes;
        this.casting_time = casting_time;
        this.duration = duration;
        this.school = school;
        this.range = range;
        this.conjurationClass = conjurationClass;
        this.spellType = spellType;
    }

    getComponentTypes() {
        return this.componentTypes;
    }

    getCastingTime() {
        return this.casting_time;
    }

    getDuration() {
        return this.duration;
    }

    getResistance() {
        return this.resistance;
    }

    getSchool() {
        return this.school;
    }

    getRange() {
        return this.range;
    }

    getConjurationClass() {
        return this.conjurationClass;
    }

    getSpellType() {
        return this.spellType;
    }

    setResistance(resistance: string) {
        this.resistance = resistance;
    }
};

export default Spell