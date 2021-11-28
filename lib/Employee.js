
class Employee {
    //constructor
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        //console.log(`ID is ${this.name}`);
    }
    //function to get employee ID number
    getId() {
        //console.log(`ID is ${this.id}`);
    }
    //function to return email
    getEmail() {
        //console.log(`email is ${this.email}`);
    }
    //return employee for Employee Class
    getRole() {
        //return Employee;
        //console.log(`Employee name is ${Employee}`);
    }
    
};

module.exports = Employee;

