class InventoryItens {
    private id: number
    private idItem: number
    private idInventory: number

    constructor (id: number, idItem: number, idInventory: number) {
        this.id = id
        this.idItem = idItem
        this.idInventory = idInventory
    };

    getInventoryIntemId () {
        return this.id
    };
    getInventoryIntemIdItem () {
        return this.idItem
    };
    getInventoryIntemIdInventory () {
        return this.idInventory
    };
    setInventoryIntemIdItem (idItem: number) {
        this.idItem = idItem
    };
    setInventoryIntemId (idInventory: number) {
        this.idInventory = idInventory
    };
}
export default InventoryItens