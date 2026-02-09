import ComponentTypes from "./enums/ComponentTypes.js"
import ClassNames from "./enums/ClassNames.js"
import SpellTypes from "./enums/SpellTypes.js";

class Spell {
    private id: number
    private name: string
    private description: string
    private componentTypes: ComponentTypes[] 
    private castingTime: string 
    private castingDistance: string
    private spellRange: string
    private duration: string
    private conjurationClass: ClassNames[]
    private spellType: SpellTypes
    private resistance: string = ''
    private school: string 

    constructor(id: number, name: string, description: string, componentTypes: ComponentTypes[], castingTime: string, castingDistance:string, spellRange:string, duration: string, resistance:string, school: string, conjurationClass: ClassNames[], spellType: SpellTypes) {
        this.id = id
        this.name = name
        this.description = description
        this.componentTypes = componentTypes;
        this.castingTime = castingTime;
        this.castingDistance = castingDistance;
        this.spellRange = spellRange;
        this.duration = duration;
        this.conjurationClass = conjurationClass;
        this.spellType = spellType;
        this.resistance = resistance;
        this.school = school;
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
        return this.castingTime;
    }

    getCastingDistance() {
        return this.castingDistance
    }

    getSpellRange() {
        return this.spellRange
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

    setCastingDistance(castingDistance:string) {
        this.castingDistance = castingDistance
    }

    setSpellRange(spellRange:string) {
        this.spellRange = spellRange
    }
};

export default Spell