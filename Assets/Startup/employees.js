const inquirer = require("inquirer");

class Employee {

    constructor(firstName, lastName, role, manager, salary, department) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.role = role;
        this.manager = manager;
        this.salary = salary;
        this.department = department;
    }
}



function viewEmployees() {
    inquirer.prompt({
        type: "list",
        name: "employeeChoice",
        message: "Would you like to: ",
        choice: [{
            name: "View an Employee",
            value: "VIEW_EMPLOYEE"
        },
        {
            name: "Add A New Employee",
            value: "ADD_EMPLOYEE"
        },
        {
             name: "Delete An Employee",
             value: "DELETE_EMPLOYEE"    
        },
        {
             name: "Edit An Employee",
             value: "EDIT_EMPLOYEE"  
        },
        {
             name: "List Employees:",
             value: "LIST_EMPLOYEES"
        },
        {
             name: "Return To The Main Menu",
             value: "MAIN_MENU"
        }
    ]
    })

    //Swith Statement
    switch (choice) {
        case "VIEW_EMPLOYEE":
            return viewSingleEmployee();

        case "ADD_EMPLOYEE":
            return addEmployee();

        case "DELETE_EMPLOYEE":
            return deleteEmployee();
        
        case "EDIT_EMPLOYEE":
            return editEmployee();

        case "LIST_EMPLOYEES":
            return listEmployees();

        case "MAIN_MENU":
            return mainMenu();
    }

    function viewSingleEmployee() {
        //visitSingleEmployee function
    }

    function addEmployee() {
        //addEmployee function. role salary manager department
        inquirer.prompt ({
            type: "input",
            name: "firstName",
            message: "What is the new employee's first name?"
        },
        {
            type: "input",
            name: "lastName",
            message: "What is the new employee's last name?"
        },
        {
            type: "number",
            name: "role",
            message: "What is the new employee's role ID?"
        },
        {
            type: "number",
            name: "salary",
            message: "What is the new employee's salary?"
        },
        {
            type: "number",
            name: "department",
            message: "What is the new employee's department ID?"
        })
        .then(answer => {
            const employee = new Employee(answer.firstName, answer.lastName, answer.role, answer.salary, answer.department);
            push.teamMembers(employee);
            //push this info into the database, somehow
            viewEmployees();
        })
    }
        
    function deleteEmployee() {
        //deleteEmployee function
    }

    function editEmployee() {
        //editEmployee function
    }

    function listEmployees() {
        //listEmployees function
    }

    function mainMenu() {
        loadPrompts();
    }
}

module.exports = viewEmployees;