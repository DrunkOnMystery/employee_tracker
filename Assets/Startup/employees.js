const inquirer = require("inquirer");
const connection = require("./db/connection");
const loadPrompts = require("./index");
// const console = require("console.table");



// function viewEmployees() {

//     var query = "SELECT id, first_name, last_name, role_id, manager_id FROM employee"
//     connection.query(query, function (err, res) {
//         if (err) throw err;
//         console.table(res);

//         loadPrompts();
//     })
// }

// function viewDepartments() {
//     var query = "SELECT name FROM department"
//     connection.query(query, function (err, res) {
//         if (err) throw err;
//         console.table(res);
//         loadPrompts();
//     })

// }


// module.exports = {viewEmployees,
//                   viewDepartments}