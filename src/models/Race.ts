class Race {
    private id: number
    private name: string
    private description: string
    private skills: string
    private ability: string

    constructor(id: number, name: string, description: string, skills: string, ability: string){
        this.id = id
        this.name = name
        this.description = description
        this.skills = skills
        this.ability = ability
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
    getRaceAbility() {
        return this.ability
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
    setRaceAbility(ability: string) {
        this.ability = ability
    };
};

export default Race