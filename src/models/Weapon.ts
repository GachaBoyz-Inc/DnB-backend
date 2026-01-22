import AttributeTypes from "./enums/AttributeTypes.js";
import Item from "./Item.js";
import ItemTypes from "./enums/ItemTypes.js";

class Weapon extends Item {
    private damage: string 
    private attribute: AttributeTypes
    private crit: number 

    constructor(id:number, name:string, description:string, type: ItemTypes, damage: string, attribute: AttributeTypes, crit: number) {
        super(id, name, description, type)
        this.damage = damage 
        this.attribute = attribute
        this.crit = crit 
    }

    getDamage(): string {
        return this.damage;
    }

    getAttribute(): AttributeTypes {
        return this.attribute;
    }

    getCrit(): number {
        return this.crit;
    }

    setDamage(damage: string) {
        this.damage = damage;
    }

    setAttribute(attribute: AttributeTypes) {
        this.attribute = attribute;
    }

    setCrit(crit: number) {
        this.crit = crit;
    }
} 

export default Weapon