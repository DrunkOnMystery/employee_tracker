//Require statements
const inquirer = require("inquirer");
const logo = require("asciiart-logo");
const connection = require("./db/connection");


//initial function
function init() {
    const logoText = logo({ name: "Employee Manager" }).render();
    console.log(logoText);

    loadPrompts();
}

//function that prompts the user
function loadPrompts() {
    inquirer.prompt({
        type: "list",
        name: "choices",
        message: "What would you like to do?",
        choices: ["View Employees", "View Departments", "View All Roles", "Add A Department",
            "Add A Role", "Add An Employee", "Update An Employee Role", "Update Employee Managers", 
            "Delete A Department", "Delete An Employee Role", "Delete An Employee",
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
                    break;
                case "View All Roles":
                    viewRoles();
                    break;
                case "Add A Department":
                    addDepartment();
                    break;
                case "Add A Role":
                    addRole();
                    break;
                case "Add An Employee":
                    addEmployee();
                    break;
                case "Update An Employee Role":
                    updateRole();
                    break;
                case "Update Employee Managers":
                    updateManager();
                    break;
                case "Delete A Department":
                    deleteDepartment();
                    break;
                case "Delete An Employee Role":
                    deleteRole();
                    break;
                case "Delete An Employee":
                    deleteEmployee();
                    break;
                case "Disconnect":
                    connection.end();
            }
        })

//view employees function
    function viewEmployees() {

        var query = "SELECT id, first_name, last_name, role_id, manager_id FROM employee"
        connection.query(query, function (err, res) {
            if (err) throw err;
            console.table(res);
            loadPrompts();
        })
    }

//view departments function
    function viewDepartments() {
        var query = "SELECT name FROM department"
        connection.query(query, function (err, res) {
            if (err) throw err;
            console.table(res);
            loadPrompts();
        })

    }

//view roles function
    function viewRoles() {
        var query = "SELECT title FROM role"
        connection.query(query, function (err, res) {
            if (err) throw err;
            console.table(res);
            loadPrompts();
        })
    }

//add department function
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

//add role function
    function addRole() {
        var query = "SELECT name FROM department"
        connection.query(query, function (err, res) {
            if (err) throw err;
            console.table(res);

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
    })
}

//add employee function
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
    ])
        .then(answer => {
            connection.query("INSERT INTO employee SET ?",
                { first_name: answer.first_name, last_name: answer.last_name, role_id: answer.role}, function (err) {
                    if (err) throw err;
                    console.log("You've added a new employee.")
                    loadPrompts();
                })
        })
}

//update role function
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
            message: "What id number of the employee you wish to update?",
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
}

//update manager function
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

//delete department function
function deleteDepartment() {

    var query = "SELECT name FROM department"
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);

        inquirer.prompt(
            {
                type: "input",
                name: "deleteDept",
                message: "Which department would you like to delete?"
            }
        )
            .then(answer => {
                connection.query("DELETE FROM department WHERE ?",
                    {
                        name: answer.deleteDept
                    },
                    function (err) {
                        if (err) throw err;
                        console.log("You've successfully deleted the " + answer.deleteDept + " department.");
                        loadPrompts();
                    })
            })
    })
}

//delete role function
function deleteRole() {

    var query = "SELECT title FROM role"
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);

        inquirer.prompt(
            {
                type: "input",
                name: "deleteRole",
                message: "Which role would you like to delete?"
            }
        )
            .then(answer => {
                connection.query("DELETE FROM role WHERE ?",
                    {
                        title: answer.deleteRole
                    },
                    function (err) {
                        if (err) throw err;
                        console.log("You've successfully deleted the " + answer.deleteRole + " role.");
                        loadPrompts();
                    })
            })
    })
}

//delete employee function
function deleteEmployee() {

    var query = "SELECT first_name FROM employee"
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);

        inquirer.prompt(
            {
                type: "input",
                name: "deleteEmployee",
                message: "What is the first name of the employee you would like to delete?"
            }
        )
            .then(answer => {
                connection.query("DELETE FROM employee WHERE ?",
                    {
                        first_name: answer.deleteEmployee
                    },
                    function (err) {
                        if (err) throw err;
                        console.log("You've successfully deleted " + answer.deleteEmployee + " from the database.");
                        loadPrompts();
                    })
            })
    })
}

//call initial function
init();

