import Item from "./Item.js"
import ItemTypes from "./enums/ItemTypes.js"

class DefenseEquipment extends Item {
    private ca_bonus: number 

    constructor(id: number, name: string, description: string, ca_bonus: number) {
        super(id, name, description, ItemTypes.EQUIPMENT);
        this.ca_bonus = ca_bonus;
    }

    getCaBonus() {
        return this.ca_bonus;
    }

    setCaBonus(ca_bonus: number) {
        this.ca_bonus = ca_bonus;
    }
} 

export default DefenseEquipment