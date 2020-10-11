//Require statements
const inquirer = require("inquirer");
const mysql = require("mysql");
const logo = require("logo");
const console = require("console.table")


//function init()

function init() {
    const logoText = logo({name: "Employee Manager"}).render();
    console.log(logoText);

    //load our prompts
    loadPrompts();
}

function loadPrompts() {
    inquirer.prompt ({
        type: "list",
        name: "choice",
        message: "What would you like to do?",
        choice: [{
            name: "View All Employees",
            value: "VIEW_EMPLOYEES"
        },
        {
            name: "View Departments",
            value: "VIEW_DEPARTMENTS"
        },
        // {
        //     name: "View All Roles",
        //     value: "VIEW_ROLES"
        // },
        // {
        //     name: "Add department",
        //     value: "ADD_DEPARTMENT"
        // },
        // {
        //     name: "Add Role",
        //     value: "ADD_ROLE"
        // },
        // {
        //     name: "Add Employee",
        //     value: "ADD_EMPLOYEE"
        // },
        // {
        //     name: "Update Employee Roles",
        //     value: "UPDATE_ROLES"
        // },
        // {
        //     name: "Update Employe Managers",
        //     value: "UPDATE_MANAGERS"
        // },
        // {
        //     name: "List Employees By Manager",
        //     value: "EMPLOYEES_MANAGER"
        // },
        // {
        //     name: "Delete Department",
        //     value: "DELETE_DEPARTMENT"
        // },
        // {
        //     name: "Delete roles",
        //     value: "DELETE_ROLES"
        // },
        // {
        //     name: "Delete Employees",
        //     value: "DELETE_EMPLOYEES"
        // },
        {
            name: "View Total Budget",
            value: "VIEW_BUDGET"
        }]
    })


//Switch statement
    switch (choice) {
        case "VIEW_EMPLOYEES":
            return viewEmployees();

        case "VIEW_DEPARTMENTS":
            return viewDepartments();
        
        case "VIEW_BUDGET":
            return viewBudget();
    }


}

