class department {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        

    }
    getId() {
        
        return this.id
    }
    getName() {
        
        return this.name
    }
    getRole() {
        return 'department'
    }
}

module.exports = department