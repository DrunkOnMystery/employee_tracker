const inquirer = require("inquirer");
const connection = require("./db/connection");



function viewEmployees() {

   return connection.query(

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