class User {
    private id: number | null
    private name: string
    private password: string 
    private email: string

    constructor(id: number | null, name: string, password: string, email: string) {
        this.id = id
        this.name = name
        this.password = password
        this.email = email
    }

    getUserId() {
        return this.id
    }

    getUserName() {
        return this.name
    }

    getUserPassword() {
        return this.password
    }

    setUserPassword(password: string) {
        this.password = password
    }

    getUserEmail() {
        return this.email
    }

    setUserName(name: string) {
        this.name = name
    }

    setUserEmail(email: string) {
        this.email = email
    }
};

export default User
