//Require statements
const inquirer = require("inquirer");
const logo = require("asciiart-logo");
const connection = require("./db/connection");
const employees = require("./employees");
// const viewEmployees = employees.viewEmployees;
// const viewDepartments = employees.viewDepartments;
// const viewRoles = employees.viewRoles;
// const addDepartment = employees.addDepartment;
// const addRole = employees.addRole;
// const updateRole = employees.updateRole;
// const listByManager = employees.listByManager;
// const deleteDepartment = employees.deleteDepartment;
// const deleteRole = employees.deleteRole;
// const deleteEmployee = employees.deleteEmployee
const { allowedNodeEnvironmentFlags } = require("process");



function init() {
    const logoText = logo({ name: "Employee Manager" }).render();
    console.log(logoText);


    loadPrompts();
}

function loadPrompts() {
    inquirer.prompt({
        type: "list",
        name: "choices",
        message: "What would you like to do?",
        choices: ["View Employees", "View Departments", "View All Roles", "Add A Department",
            "Add A Role", "Add An Employee", "Update Employee Roles", "Update Employee Managers", "List Employees By Manager",
            "Delete A Department", "Delete An Employee Role", "Delete An Employee", "View Total Budget",
            "Disconnect"]
    })

        .then(answer => {
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
                case "Add An Employee":
                    addEmployee();
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
        })


    function viewEmployees() {

        var query = "SELECT id, first_name, last_name, role_id, manager_id FROM employee"
        connection.query(query, function (err, res) {
            if (err) throw err;
            console.table(res);
            loadPrompts();
        })
    }

    function viewDepartments() {
        var query = "SELECT name FROM department"
        connection.query(query, function (err, res) {
            if (err) throw err;
            console.table(res);
            loadPrompts();
        })

    }

    function viewRoles() {
        var query = "SELECT title FROM role"
        connection.query(query, function (err, res) {
            if (err) throw err;
            console.table(res);
            loadPrompts();
        })
    }

    function addDepartment() {
        inquirer.prompt({
            type: "index",
            name: "addDepartment",
            message: "What department would you like to add?",
        })
            .then(answer => {
                connection.query("INSERT INTO department SET ?",
                    { name: answer.addDepartment }, function (err) {
                        if (err) throw err;
                        console.log("You've added a department successfully.")
                        loadPrompts();
                    })
            })
    }

    function addRole() {
        inquirer.prompt([{
            type: "index",
            name: "addRole",
            message: "What role would you like to add?",
        },
        {
            type: "number",
            name: "salary",
            message: "What is the salary of this new role?"
        },
        {
            type: "number",
            name: "department",
            message: "What department id will this role fall under?"
        }])

            .then(answer => {
                connection.query("INSERT INTO role SET ?",
                    { title: answer.addRole, salary: answer.salary, department_id: answer.department }, function (err) {
                        if (err) throw err;
                        console.log("You've added a new role")
                        loadPrompts();
                    })
            })
    }
}

function addEmployee() {
    inquirer.prompt([
        {
            type: "input",
            name: "first_name",
            message: "What is the first name of the new employee?"
        },
        {
            type: "input",
            name: "last_name",
            message: "What is the last name of the new employee?"
        },
        {
            type: "number",
            name: "role",
            message: "What is the id for this person's role?"
        },
        {
            type: "number",
            name: "manager",
            message: "What is the id of this employee's manager, if any?",
            /* Legacy way: with this.async */
            validate: function (input) {

                if (typeof input == "NaN") {
                    // Pass the return value in the done callback
                    return 'You need to provide a number';
                }
                return true;

            }
        }
    ])
        .then(answer => {
            connection.query("INSERT INTO employee SET ?",
                { first_name: answer.first_name, last_name: answer.last_name, role_id: answer.role, manager_id: answer.manager }, function (err) {
                    if (err) throw err;
                    console.log("You've added a new employee.")
                    loadPrompts();
                })
        })
}

function updateRole() {

    var query = "SELECT first_name, last_name FROM employee"
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);
    })

    var query = "SELECT title FROM role"
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);
    })

    inquirer.prompt([
        {
            type: "number",
            name: "updateEmployee",
            message: "What is the id number of the employee whose role you wish to update?"
        },
        {
            type: "number",
            name: "newRole",
            message: "What is the id of the employee's new role?"
        }
    ])
        .then(answer => {
            connection.query("Update employee SET ? WHERE ?",
                [
                    {
                        role_id: answer.newRole
                    },
                    {
                        id: answer.updateEmployee
                    }
                ],
            )
            console.log("You've updated this employee's role.")
            loadPrompts();
        })
}

function updateManager() {

    var query = "SELECT first_name, last_name FROM employee"
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);
    })

    var query = "SELECT title FROM role"
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);
    })

    inquirer.prompt([
        {
            type: "number",
            name: "updateEmployee",
            message: "What is the id number of the employee whose manager you wish to update?"
        },
        {
            type: "number",
            name: "newManager",
            message: "What is the id of the employee's new manager?"
        }
    ])
        .then(answer => {
            connection.query("Update employee SET ? WHERE ?",
                [
                    {
                        role_id: answer.newManager
                    },
                    {
                        id: answer.updateEmployee
                    }
                ],
            )
            console.log("You've updated this employee's manager.")
            loadPrompts();
        })
}


init();

module.exports = loadPrompts;