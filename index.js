

const Manager = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");

const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/renderedoutput");

const employeeList = [];

const promptUser = () =>
inquirer.prompt([
    {
        type : "input",
        name: "name",
        message: "What is the employee's NAME?"
    },
    {
        type: "list",
        name: "role",
        message: "What is the employee's ROLE?",
        choices: ["Manager", "Engineer", "Intern"]
    },
    {
        type: "input",
        name: "id",
        message: "What is the employee's ID NUMBER?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the employee's EMAIL?"
    },
    {
        type: "input",
        name: "office",
        message: "What is the manager's OFFICE NUMBER?",
        when: (answers) => answers.role === "Manager"
    },
    {
        type: "input",
        name: "github",
        message: "What is the engineer's GITHUB NAME?",
        when: (answers) => answers.role === "Engineer"
    },
    {
        type: "input",
        name: "school",
        message: "What SCHOOL is the intern attending?",
        when: (answers) => answers.role === "Intern"
    }
]);

const addMorePrompt = () =>
inquirer.prompt([
    {
        type: "confirm",
        name: "add",
        message: "Would you like to add another employee?"
    }
]);

async function init() {
    const employeeData = await promptUser();
    switch (employeeData.role) {
        case "Manager":
            const newManager = new Manager(employeeData.name, employeeData.id, employeeData.email, employeeData.office);
            employeeList.push(newManager);
            break;
        case "Engineer":
            const newEngineer = new Engineer(employeeData.name, employeeData.id, employeeData.email, employeeData.github);
            employeeList.push(newEngineer);
            break;
        case "Intern":
            const newIntern = new Intern(employeeData.name, employeeData.id, employeeData.email, employeeData.school);
            employeeList.push(newIntern);
            break;
    }
    console.log("Employee data saved!");
    const addMore = await addMorePrompt();
    if (addMore.add) {
        init();
    } else {
        fs.writeFile(outputPath, render(employeeList), (err) => {
            if (err) {
                console.log(err);
                } else {
                console.log("Success! Your file has been created.");
                }
                });
                }
            }

            init();



