const inquirer = require("inquirer");
const connection = require("./db/connection");
// const index = require("./index");
// const console = require("console.table");



function viewEmployees() {

   var query = "SELECT first_name, last_name FROM employee" 
   connection.query(query, function(err, res) {
       if (err) throw err;
       console.table(res);
   })
}

function viewDepartments() {
    var query = "SELECT name FROM department" 
    connection.query(query, function(err, res) {
        if (err) throw err;
        console.table(res);
    })

}

function viewRoles() {
    var query = "SELECT title FROM role" 
    connection.query(query, function(err, res) {
        if (err) throw err;
        console.table(res);
    })
}

function addDepartment() {
    inquirer.prompt({
        type: "index",
        name: "addDepartment",
        message: "What department would you like to add?",
    })
    .then(
        connection.query("INSERT INTO department(name)"),
                    "VALUES ?", ("name", function (err, result) {
                        if (err) throw err
                    })

    
    )}


module.exports = { viewEmployees: viewEmployees(),
    viewDepartments: viewDepartments(), 
    viewRoles: viewRoles(),
    addDepartment: addDepartment(),
};