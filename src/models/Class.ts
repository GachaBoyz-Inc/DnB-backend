class Class {
    private id: number
    private name: string
    private description: string
    private hpDice: string
    private proficiencies: string
    private equipment: string

    constructor(id: number, name: string, description: string, hpDice: string, proficiencies: string, equipment: string) {
        this.id = id
        this.name = name
        this.description = description
        this.hpDice = hpDice
        this.proficiencies = proficiencies
        this.equipment = equipment
    };
    getClassId() {
        return this.id
    };
    getClassName() {
        return this.name
    };
    getClassDescription() {
        return this.description
    };
    getClasshpDice(){
        return this.hpDice
    };
    getClassProficiencies() {
        return this.proficiencies
    };
    getClassEquipment() {
        return this.equipment
    };
    setClassName(name: string) {
        this.name = name
    };
    setClassDescription(description: string){
        this.description = description
    };
    setClasshpDice(hpDice: string){
        this.hpDice = hpDice
    };
    setClassProficiencies(proficiencies: string){
        this.proficiencies = proficiencies 
    };
    setClassEquipment(equipment: string){
        this.equipment = equipment
    };
};
export default Class