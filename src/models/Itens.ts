class Itens {
    private id: number
    private name: string
    private description: string
    private type: string

    constructor (id: number, name: string, description: string, type: string) {
        this.id = id
        this.name = name
        this.description = description
        this.type = type
    };

    getItensId () {
        return this.id
    };
    getItensName () {
        return this.name
    };
    getItensDescription () {
        return this.description
    };
    getItensType () {
        return this.type
    }
    setItensName (name: string) {
        this.name = name
    };
    setItensDescription (description: string) {
        this.description = description
    };
    setItensType (type: string){
        this.type = type
    };
}
export default Itens