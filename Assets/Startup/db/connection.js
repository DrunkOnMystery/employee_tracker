const { builtinModules } = require("module");
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Angstboy8.com",
    database: "employees"
})


connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  questions();  
});

module.exports = connection;