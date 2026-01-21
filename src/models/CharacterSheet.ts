class CharacterSheet {
    private id: number
    private idUser: number
    private idCharacter: number

    constructor (id: number, idUser: number, idCharacter: number){
        this.id = id
        this.idUser =idUser
        this.idCharacter = idCharacter
    };
    getCharacterSheetId() {
        return this.id
    };
    getCharacterSheetIdUser() {
        return this.idUser
    };
    getCharacterSheetIdCharacter() {
        return this.idCharacter
    };
    setCharacterSheetIdUser(idUser: number) {
        this.idUser = idUser
    };
    setCharacterSheetIdCharacter(idCharacter: number) {
        this.idCharacter = idCharacter
    };
}
export default CharacterSheet