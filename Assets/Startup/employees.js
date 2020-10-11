const inquirer = require("inquirer");




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

        case "MAIN_MENU":
            return mainMenu();
    }

    function viewSingleEmployee() {
        
    }
        
}