class Character {
    private id: number 
    private sheet_id: number
    private name: string
    private backstory: string
    private appearance: string
    private ideals: string
    private objectives: string
    private bonds: string
    private flaws: string
    private personality_traits: string
    private race_id: number
    private class_id: number
    private background_id: number
    private player_name: string
    private level: number

    constructor(id: number, sheet_id:number, name: string, backstory: string, appearance: string, ideals: string, objectives: string, bonds: string, flaws: string, personality_traits: string, race_id: number, class_id: number, background_id: number, player_name: string, level: number){
        this.id = id
        this.sheet_id = sheet_id
        this.name = name
        this.backstory = backstory
        this.appearance = appearance
        this.ideals = ideals
        this.objectives = objectives
        this.bonds = bonds
        this.flaws = flaws
        this.personality_traits = personality_traits
        this.race_id = race_id
        this.class_id = class_id
        this.background_id = background_id
        this.player_name = player_name
        this.level = level  
    }

getCharacterId() {
    return this.id
};
getCharacterSheet_id() {
    return this.sheet_id
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
getCharacterPersonality_traits() {
    return this.personality_traits
};
getCharacterRace_id() {
    return this.race_id
};
getCharacterClass_id() {
    return this.class_id
};
getCharaterBackground_id() {
    return this.background_id
};
getCharacterPlayer_name() {
    return this.player_name
};
getCharacterLevel() {
    return this.level
};

setCharacterSheet_id(sheet_id: number){
    this.sheet_id = sheet_id
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
setCharacterPersonality_traits(personality_traits: string) {
    this.personality_traits = personality_traits 
};
setCharacterRace_id(race_id: number){
    this.race_id = race_id
}
setCharacterClass_id(class_id: number){
    this.class_id = class_id
}
setCharacterBackground_id(background_id: number){
    this.background_id = background_id
}
setCharacterPlayer_name(player_name: string) {
    this.player_name = player_name 
};
setCharacterLevel(level: number) {
    this.level = level 
};
}

export default Character