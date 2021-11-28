
class Employee {
    //constructor
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee";
    }
    getName() {
        return this.name;

    }
    //function to get employee ID number
    getId() {
        return this.id;
    }
    //function to return email
    getEmail() {
        return this.email;
    }
    //return employee for Employee Class
    getRole() {
        return this.role;
        //console.log(`Employee name is ${Employee}`);
    }
    

};

module.exports = Employee;

