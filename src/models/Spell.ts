import ComponentTypes from "./enums/ComponentTypes.js"
import ClassNames from "./enums/ClassNames.js"
import SpellTypes from "./enums/SpellTypes.js";

class Spell {
    private id: number
    private name: string
    private description: string
    private componentTypes: ComponentTypes[] 
    private casting_time: string 
    private duration: string
    private resistance: string = ''
    private school: string 
    private range: string 
    private conjurationClass: ClassNames[]
    private spellType: SpellTypes

    constructor(id: number, name: string, description: string, componentTypes: ComponentTypes[], casting_time: string, duration: string, resistance:string, school: string, range: string, conjurationClass: ClassNames[], spellType: SpellTypes) {
        this.id = id
        this.name = name
        this.description = description
        this.componentTypes = componentTypes;
        this.casting_time = casting_time;
        this.duration = duration;
        this.resistance
        this.school = school;
        this.range = range;
        this.conjurationClass = conjurationClass;
        this.spellType = spellType;
    }
    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getDescription() {
        return this.description;
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

    setName(name: string) {
        this.name = name;
    }

    setDescription(description: string) {
        this.description = description;
    }

    setResistance(resistance: string) {
        this.resistance = resistance;
    }
};

export default Spell