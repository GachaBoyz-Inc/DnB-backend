class Character {
    private id: number 
    private sheetId: number
    private name: string
    private backstory: string
    private appearance: string
    private ideals: string
    private objectives: string
    private bonds: string
    private flaws: string
    private personalityTraits: string
    private raceId: number
    private classId: number
    private backgroundId: number
    private playerName: string
    private level: number

    constructor(id: number, sheetId:number, name: string, backstory: string, appearance: string, ideals: string, objectives: string, bonds: string, flaws: string, personalityTraits: string, raceId: number, classId: number, backgroundId: number, playerName: string, level: number){
        this.id = id
        this.sheetId = sheetId
        this.name = name
        this.backstory = backstory
        this.appearance = appearance
        this.ideals = ideals
        this.objectives = objectives
        this.bonds = bonds
        this.flaws = flaws
        this.personalityTraits = personalityTraits
        this.raceId = raceId
        this.classId = classId
        this.backgroundId = backgroundId
        this.playerName = playerName
        this.level = level  
    }

getCharacterId() {
    return this.id
};
getCharactersheetId() {
    return this.sheetId
};
getCharacterName() {
    return this.name
};
getCharacterBackstory() {
    return this.backstory
};
getCharacterAppearance() {
    return this.appearance
};
getCharacterIdeals() {
    return this.ideals
};
getCharacterObjectives() {
    return this.objectives
};
getCharacterBonds() {
    return this.bonds
};
getCharacterFlaws() {
    return this.flaws
};
getCharacterpersonalityTraits() {
    return this.personalityTraits
};
getCharacterraceId() {
    return this.raceId
};
getCharacterClass_id() {
    return this.classId
};
getCharaterbackgroundId() {
    return this.backgroundId
};
getCharacterplayerName() {
    return this.playerName
};
getCharacterLevel() {
    return this.level
};

setCharactersheetId(sheetId: number){
    this.sheetId = sheetId
}
setCharacterName(name: string) {
    this.name = name 
};
setCharacterBackstory(backstory: string) {
    this.backstory = backstory 
};
setCharacterAppearance(appearance: string) {
    this.appearance = appearance
};
setCharacterIdeals(ideals: string) {
    this.ideals = ideals 
};
setCharacterObjectives(objectives: string) {
    this.objectives = objectives 
};
setCharacterBonds(bonds: string) {
    this.bonds = bonds 
};
setCharacterFlaws(flaws: string) {
    this.flaws = flaws 
};
setCharacterpersonalityTraits(personalityTraits: string) {
    this.personalityTraits = personalityTraits 
};
setCharacterraceId(raceId: number){
    this.raceId = raceId
}
setCharacterClass_id(classId: number){
    this.classId = classId
}
setCharacterbackgroundId(backgroundId: number){
    this.backgroundId = backgroundId
}
setCharacterplayerName(playerName: string) {
    this.playerName = playerName 
};
setCharacterLevel(level: number) {
    this.level = level 
};
}

export default Character