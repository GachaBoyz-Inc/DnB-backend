class Attributes {
    private id: number
    private strength: number
    private dexterity: number
    private intelligence: number
    private wisdom: number
    private charisma: number
    private constitution: number
    private characterId: number

    constructor (id: number, strength: number, dexterity: number, intelligence: number, wisdom: number, charisma: number, constitution: number, characterId: number){
        this.id = id
        this.strength = strength
        this.dexterity = dexterity
        this.intelligence = intelligence
        this.wisdom = wisdom
        this.charisma = charisma
        this.constitution = constitution
        this.characterId = characterId
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
    getAttributesConstitution() {
        return this.constitution
    };
    getAttributesCharacterId() {
        return this.characterId
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
    setAttributesCharacterId(characterId: number) {
        this.characterId = characterId
    };
}
export default Attributes