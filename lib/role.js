class role {
    constructor(title, id, salary) {
        this.title = title;
        this.id = id;
        this.salary = salary;

    }
    getId() {
        
        return this.id
    }
    getName() {
        
        return this.title
    }
    getEmail() {
        
        return this.salary
    }
    getRole() {
        return 'role'
    }
}

module.exports = role