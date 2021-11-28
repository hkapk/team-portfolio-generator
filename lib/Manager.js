const Employee = require('./Employee');

class Manager extends Employee {
      constructor(name, id, email, office ) {
            super(name,id,email);
            super.role = "Manager";
            this.office = office;  
      }

      getOffice() {
          return this.office;
      }

    }
 module.exports = Manager;