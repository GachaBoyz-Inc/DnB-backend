class Attributes {
    private id: number
    private strength: number
    private dexterity: number
    private intelligence: number
    private wisdom: number
    private charisma: number
    private character_id: number

    constructor (id: number, strength: number, dexterity: number, intelligence: number, wisdom: number, charisma: number, character_id: number){
        this.id = id
        this.strength = strength
        this.dexterity = dexterity
        this.intelligence = intelligence
        this.wisdom = wisdom
        this.charisma = charisma
        this.character_id = character_id
    };
    getAttributesId() {
        return this.id
    };
    getAttributesStrength() {
        return this.strength
    };
    getAttributesDexterity() {
        return this.dexterity
    };
    getAttributesIntelligence() {
        return this.intelligence
    };
    getAttributesWisdom() {
        return this.wisdom
    };
    getAttributesCharisma() {
        return this.charisma
    };
    getAttributesCharacter_id() {
        return this.character_id
    };
    setAttributesStrength(strength: number){
        this.strength = strength
    };
    setAttributesDexterity(dexterity: number) {
        this.dexterity = dexterity
    };
    setAttributesIntelligence(intelligence: number) {
        this.intelligence = intelligence
    };
    setAttributesWisdom(wisdom: number) {
        this.wisdom = wisdom
    };
    setAttributesCharisma(charisma: number) {
        this.charisma = charisma
    };
    setAttributesCharacter_id(character_id: number) {
        this.character_id = character_id
    };
}
export default Attributes