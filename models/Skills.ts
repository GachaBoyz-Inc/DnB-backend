// These class represents a group of skills which a character has. The numbers define the bonus in each skill.

class Skills {
    private id: number 
    private acrobatics: number = 0
    private arcana: number = 0
    private athletics: number = 0
    private perfomance: number = 0
    private deception: number = 0
    private stealth: number = 0
    private history: number = 0
    private intimidation: number = 0
    private insight: number = 0
    private investigation: number = 0
    private animalHandling: number = 0
    private medicine: number = 0
    private nature: number = 0
    private perception: number = 0
    private persuasion: number = 0
    private sleightOfHand: number = 0 
    private religion: number = 0
    private survival: number = 0
    private characterSheetId: number

    constructor(id: number, acrobatics: number, arcana: number, athletics: number, perfomance: number, deception: number, stealth: number, history: number, intimidation: number, insight: number, investigation: number, animalHandling: number, medicine: number, nature: number, perception: number, persuasion: number, sleightOfHand: number, religion: number, survival: number, characterSheetId: number) {
        this.id = id
        this.acrobatics = acrobatics
        this.arcana = arcana
        this.athletics = athletics
        this.perfomance = perfomance
        this.deception = deception
        this.stealth = stealth
        this.history = history
        this.intimidation = intimidation
        this.insight = insight
        this.investigation = investigation
        this.animalHandling = animalHandling
        this.medicine = medicine
        this.nature = nature
        this.perception = perception
        this.persuasion = persuasion
        this.sleightOfHand = sleightOfHand
        this.religion = religion
        this.survival = survival
        this.characterSheetId = characterSheetId
    }

    getSkillsId() {
        return this.id 
    }

    getCharacterSheetId() {
        return this.characterSheetId
    }

    getSkillsAcrobatics() {
        return this.acrobatics
    }

    getSkillsArcana() {
        return this.arcana
    }

    getSkillsAthletics() {
        return this.athletics
    }

    getSkillsPerformance() {
        return this.perfomance
    }

    getSkillsDeception() {
        return this.deception
    }

    getSkillsStealth() {
        return this.stealth
    }

    getSkillsHistory() {
        return this.history
    }

    getSkillsIntimidation() {
        return this.intimidation
    }

    getSkillsInsight() {
        return this.insight
    }

    getSkillsInvestigation() {
        return this.investigation
    }

    getSkillsAnimalHandling() {
        return this.animalHandling
    }

    getSkillsMedicine() {
        return this.medicine
    }

    getSkillsNature() {
        return this.nature
    }

    getSkillsPerception() {
        return this.perception
    }

    getSkillsPersuasion() {
        return this.persuasion
    }

    getSkillsSleightOfHand() {
        return this.sleightOfHand
    }

    getSkillsReligion() {
        return this.religion
    }

    getSkillsSurvival() {
        return this.survival
    }

    setSkillsAcrobatics(value:number) {
        this.acrobatics = value
    }

    setSkillsArcana(value:number) {
        this.arcana = value
    }

    setSkillsAthletics(value:number) {
        this.athletics = value
    }

    setSkillsPerformance(value:number) {
        this.perfomance = value
    }

    setSkillsDeception(value:number) {
        this.deception = value
    }

    setSkillsStealth(value:number) {
        this.stealth = value
    }

    setSkillsHistory(value:number) {
        this.history = value
    }

    setSkillsIntimidation(value:number) {
        this.intimidation = value
    }

    setSkillsInsight(value:number) {
        this.insight = value
    }

    setSkillsInvestigation(value:number) {
        this.investigation = value
    }

    setSkillsAnimalHandling(value:number) {
        this.animalHandling = value
    }

    setSkillsMedicine(value:number) {
        this.medicine = value
    }

    setSkillsNature(value:number) {
        this.nature = value
    }

    setSkillsPerception(value:number) {
        this.perception = value
    }

    setSkillsPersuasion(value:number) {
        this.persuasion = value
    }

    setSkillsSleightOfHand(value:number) {
        this.sleightOfHand = value
    }

    setSkillsReligion(value:number) {
        this.religion = value
    }

    setSkillsSurvival(value:number) {
        this.survival = value
    }
} 

export default Skills