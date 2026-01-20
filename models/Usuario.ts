class Usuario {
    private id: number 
    private name: string
    private password: string 
    private email: string
};

function getUserId() {
    return this.id
};

function getUserName() {
    return this.name
};

function getUserEmail() {
    return this.email 
};

function setUserName(name:string) {
    this.name = name 
};

function setUserEmail(email:string) {
    this.email = email 
}; 
