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


}


module.exports = { viewEmployees, viewDepartments, viewRoles, addDepartment,


}