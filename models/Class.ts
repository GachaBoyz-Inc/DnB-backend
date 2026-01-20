class Class {
    private id: number
    private name: string
    private description: string
    private hpDice: string
    private proficiency: string
    private equipament: string

    constructor(id: number, name: string, description: string, hpDice: string, proeficiency: string, equipament: string) {
        this.id = id
        this.name = name
        this.description = description
        this.hpDice = hpDice
        this.proficiency = proeficiency
        this.equipament = equipament
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
    getClassProficiency() {
        return this.proficiency
    };
    getClassEquipament() {
        return this.equipament
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
    setClassProficiency(proeficiency: string){
        this.proficiency = proeficiency 
    };
    setClassEquipament(equipament: string){
        this.equipament = equipament
    };
};
export default Class