class employee {
    constructor(id, first_name, last_name, role_id, manager_id) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.role_id = role_id;
        this.manager_id = manager_id

    }
    getName() {
        
        return this.id
    }
    getId() {
        
        return this.first_name
    }
    getId() {
        
        return this.last_name
    }
    getEmail() {
        
        return this.role_id
    }
    getId() {
        
        return this.manager_id
    }
    getRole() {
        return 'employee'
    }
}

module.exports = employee