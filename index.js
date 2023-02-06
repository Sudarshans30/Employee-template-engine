const Manager = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(Dist_DIR, "team.html");

const render = require("./lib/renderedoutput");

const employeeList = [];

const promptUser = () =>
inquirer.prompt([
    {
        type : "input",
        name: "name",
        message: " What is the employee's NAME?",

    },
    {
        type: "list",
        name: "role",
        message: "What is the employee's ROLE ?",
        choices:  ["Manager", "Engineer", "Intern"],
    },
    {
        type: "input",
        name: "id",
        message: " What is the employee's ID NUMBER?",

    },
    {
        type: "input",
        name: "email",
        message: "What is the employee's EMAIL?",
    },
    {
        type: "input",
        name: "office",
        message: "What is the manager's OFFICE NUMBER?",
        When: (answers) => answers.role === "Manager",
    },
    {
        type: "input",
        name: "github",
        message: "What is the engineer's GITHUB NAME?",
        When: (answers) => answers.role === "Engineer",
    },
    {
        type: "input",
        name: "school",
        message: "What SCHOOL is the intern attending?",
        When: (answers) => answers.role ==="Intern",

    },

]);

const addMorePrompt =() =>
inquirer.prompt ([
    {
        type: "confirm",
        name: "add",
        message: "Would you like to add another employee?",
    },
]);

function init(){
    promptUser().then ((data) => {
        switch (data.role) {
            case "Manager":
                let newManager = new Manager(
                    data.name,
                    data.id,
                    data.email,
                    data.office,

                );

                employeeList.push(newManager);
                break;
                let newEngineer = new Engineer(
                    data.name,
                    data.id,
                    data.email,
                    data.github,
                );
                employeeList.push(newEngineer);
                break;
                case "Intern":
                    let newIntern = new Intern(data.name, data.id, data.email, data.school);
                    employeeList.push(newIntern);
                    break;
                }
                console.logg("Employee data saved!");
                addMorePrompt().then((data) => {
                    if (data.add){
                        init();

                    }else{
                        fs.writeFileSync(outputPath, render(employeeList),),
                        (err) =>
                        err ? console.log (err) : console.log("Success!");
                        console.log("Your file has been created!")
                    }
                });
            });
        }
        init();