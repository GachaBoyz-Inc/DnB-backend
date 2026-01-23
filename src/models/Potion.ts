import ItemTypes from "./enums/ItemTypes.js";
import Item from "./Item.js";

class Potion extends Item{
    private duration: string
    private potionType: string

    constructor(id: number, name: string, description: string, duration: string, potionType: string){
        super(id, name, description, ItemTypes.CONSUMABLE)
        this.duration = duration
        this.potionType = potionType
    };

    get potionsDuration(){
        return this.duration;
    };
    get potionsPotionType(){
        return this.potionType;
    };

    set potionsDuration(duration: string){
        this.duration = duration;
    };
    set potionsPotionType(potionType: string){
        this.potionType = potionType;
    };
};

export default Potion