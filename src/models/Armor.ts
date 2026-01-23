import ItemTypes from "./enums/ItemTypes.js";
import Item from "./Item.js"

class Armor extends Item {
    private ca: number 
    private dex_bonus: boolean 
    private stealth_disavantage: boolean

    constructor(id: number, name: string, description: string, ca: number, dex_bonus: boolean, stealth_disavantage: boolean) {
        super(id, name, description, ItemTypes.ARMOR);
        this.ca = ca;
        this.dex_bonus = dex_bonus;
        this.stealth_disavantage = stealth_disavantage;
    }

    getArmorClass(): number {
        return this.ca;
    }

    setArmorClass(ca: number) {
        this.ca = ca;
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