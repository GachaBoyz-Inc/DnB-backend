class Inventory {
    private id: number
    private idCharacterSheet: number

    constructor (id: number, idCharacterSheet: number) {
        this.id = id
        this.idCharacterSheet = idCharacterSheet
    };
    getInventoryId () {
        return this.id
    };
    getInventoryIdCharacterSheet () {
        return this.idCharacterSheet
    };
    setInventoryCharacterSheet (idCharacter: number) {
        this.idCharacterSheet = idCharacter
    };
};
export default Inventory