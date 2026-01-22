import ItemTypes from "./enums/ItemTypes.js"

class Item {
    private id: number
    private name: string
    private description: string
    private type: ItemTypes

    constructor(id: number, name: string, description: string, type: ItemTypes) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.type = type;
    }

    getItemId(): number {
        return this.id;
    }

    getItemName(): string {
        return this.name;
    }

    getItemDescription(): string {
        return this.description;
    }

    getItemType(): ItemTypes {
        return this.type;
    }

    setItemName(name: string) {
        this.name = name;
    }

    setItemDescription(description: string) {
        this.description = description;
    }

    setItemType(type: ItemTypes) {
        this.type = type;
    }
}

export default Item 