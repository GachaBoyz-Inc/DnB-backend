class SavingThrows {
    private id: number
    private strength: number
    private dexterity: number
    private intelligence: number
    private wisdom: number
    private charisma: number
    private characterId: number

    constructor (id: number, strength: number, dexterity: number, intelligence: number, wisdom: number, charisma: number, characterId: number){
        this.id = id
        this.strength = strength
        this.dexterity = dexterity
        this.intelligence = intelligence
        this.wisdom = wisdom
        this.charisma = charisma
        this.characterId = characterId
    };
    getSavingThrowsId() {
        return this.id
    };
    getSavingThrowsStrength() {
        return this.strength
    };
    getSavingThrowsDexterity() {
        return this.dexterity
    };
    getSavingThrowsIntelligence() {
        return this.intelligence
    };
    getSavingThrowsWisdom() {
        return this.wisdom
    };
    getSavingThrowsCharisma() {
        return this.charisma
    };
    getSavingThrowsCharacterId() {
        return this.characterId
    };
    setSavingThrowsStrength(strength: number){
        this.strength = strength
    };
    setSavingThrowsDexterity(dexterity: number) {
        this.dexterity = dexterity
    };
    setSavingThrowsIntelligence(intelligence: number) {
        this.intelligence = intelligence
    };
    setSavingThrowsWisdom(wisdom: number) {
        this.wisdom = wisdom
    };
    setSavingThrowsCharisma(charisma: number) {
        this.charisma = charisma
    };
    setSavingThrowsCharacterId(characterId: number) {
        this.characterId = characterId
    };
}
export default SavingThrows