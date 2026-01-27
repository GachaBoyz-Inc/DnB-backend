import ItemTypes from "./enums/ItemTypes.js";
import Item from "./Item.js"

class Armor extends Item {
    private classArmor: number 
    private dex_bonus: boolean 
    private stealth_disavantage: boolean

    constructor(id: number, name: string, description: string, classArmor: number, dex_bonus: boolean, stealth_disavantage: boolean) {
        super(id, name, description, ItemTypes.ARMOR);
        this.classArmor = classArmor;
        this.dex_bonus = dex_bonus;
        this.stealth_disavantage = stealth_disavantage;
    }

    getArmorClass(): number {
        return this.classArmor;
    }

    setArmorClass(classArmor: number) {
        this.classArmor = classArmor;
    }

    hasDexBonus(): boolean {
        return this.dex_bonus;
    }

    setDexBonus(dex_bonus: boolean) {
        this.dex_bonus = dex_bonus;
    }

    hasStealthDisadvantage(): boolean {
        return this.stealth_disavantage;
    }

    setStealthDisadvantage(stealth_disavantage: boolean) {
        this.stealth_disavantage = stealth_disavantage;
    }
} 

export default Armor 