//Require statements
const inquirer = require("inquirer");
const logo = require("logo");
const connection = require("./db/connection");
const viewEmployees = require("./employees");
const { allowedNodeEnvironmentFlags } = require("process");

// teamMembers = [];



function init() {
    // const logoText = logo({ name: "Employee Manager" }).render();
    // console.log(logoText);

    //load our prompts
    loadPrompts();
}

function loadPrompts() {
    inquirer.prompt({
        type: "list",
        name: "choices",
        message: "What would you like to do?",
        choices: [ "View Employees", "View Departments", "View All Roles", "Add A Department",
        "Add A Role", "Update Employee Roles", "Update Employee Managers", "List Employees By Manager",
        "Delete A Department", "Delete An Employee Role", "Delete An Employee", "View Total Budget",
        "Disconnect"]       
    })

    .then (async answer => {
    //Switch statement
    switch (answer.choices) {
        case "View Employees":
            viewEmployees();
            break;

        case "View Departments":
            viewDepartments();
            // loadPrompts();
            break;
        case "View All Roles":
            viewRoles();
            // loadPrompts();
            break;
        case "Add A Department":
            addDepartment();
            // loadPrompts();
            break;
        case "Add A Role":
            addRole();
            // loadPrompts();
            break;
        case "Update Employee Roles":
            updateRole();
            // loadPrompts();
            break;
        case "Update Employee Managers":
            updateManager();
            // loadPrompts();
            break;
        case "List Employees By Manager":
            listByManager();
            // loadPrompts();
            break;
        case "Delete A Department":
            deleteDepartment();
            // loadPrompts();
            break;
        case "Delete An Employee Role":
            deleteRole();
            // loadPrompts();
            break;
        case "Delete An Employee":
            deleteEmployee();
            // loadPrompts();
            break;
        case "View Total Budget":
            viewBudget();
            // loadPrompts();
            break;        
        case "Disconnect":
            connection.end();
    }
    .then {

    }
})
}
init();

// module.exports = index;