import ItemTypes from "./enums/ItemTypes.js";
import Potion from "./Potion.js"


class HealingPotion extends Potion {
    private healingAmount: string;

    constructor(id: number, name: string, description: string, healingAmount: string, duration:string, potionType:string) {
        super(id, name, description, duration, potionType);
        this.healingAmount = healingAmount;
    }

    getHealingAmount(): string {
        return this.healingAmount;
    }

    setHealingAmount(healingAmount: string) {
        this.healingAmount = healingAmount;
    }
}

export default HealingPotion