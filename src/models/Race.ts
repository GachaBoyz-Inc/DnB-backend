class Race {
    private id: number
    private name: string
    private description: string
    private skills: string
    private abilities: string

    constructor(id: number, name: string, description: string, skills: string, abilities: string){
        this.id = id
        this.name = name
        this.description = description
        this.skills = skills
        this.abilities = abilities
    };

    getRaceId() {
        return this.id
    };
    getRaceName()  {
        return this.name
    };
    getRaceDescription() {
        return this.description
    };
    getRaceSkills() {
        return this.skills
    };
    getRaceAbilities() {
        return this.abilities
    };
    setRaceName(name: string) {
        this.name = name
    };
    setRaceDescription(description: string) {
        this.description = description
    };
    setRaceSkills(skills: string) {
        this.skills = skills
    };
    setRaceAbilities(abilities: string) {
        this.abilities = abilities
    };
};

export default Race