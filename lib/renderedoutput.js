const path = require("path");
const fs = require("fs");
const Engineer = require("./Engineer");

const templatesDir = path.resolve(__dirname, "../src");

const render = employees => {
    return employees.reduce((acc, employee) => {
      if (employee.getRole() === "Manager") {
        acc.push(renderManager(employee));
      }
      return acc;
    }, []);
        return employees.reduce((acc, employee) => {
          if (employee.getRole() === "Engineer") {
            acc.push(renderEngineer(engineer));
          }
          return acc;
        }, []);
    
            return employees.reduce((acc, employee) => {
              if (employee.getRole() === "Intern") {
                acc.push(renderIntern(intern));
              }
              return acc;
            }, []);

            return renderMain(html.reduce((acc, cur) => acc + cur, ""));


          };

          const renderManager = manager => {
            let template = fs.readFileSync(path.resolve(templatesDir, "manager.html"));
            template = replacePlaceholders(template, "name", manager.getName());
            template = replacePlaceholders(template, "role", manager.getRole());
            template = replacePlaceholders(template, "email", manager.getEmail());
            template = replacePlaceholders(template, "id", manager.getId());
            template = replacePlaceholders(template, "officeNumber" , manager.getOfficeNumber());
            return template;
          };

          const renderEngineer = engineer => {
            let template = fs.readFileSync(path.resolve(templateDir, "engineer.html"));
            template = replacePlaceholders(template, "name", engineer.getName());
            template = replacePlaceholders(template, "role", engineer.getRole());
            template = replacePlaceholders(template, "email", engineer.getEmail());
            template = replacePlaceholders(template, "id", engineer.getId());
            template = replacePlaceholders(template, "officeNumber" , engineer.getOfficeNumber());
            return template;

          };

          const renderIntern = intern => {
            let template = fs.readFileSync(path.resolve(templateDir, "intern.html"));
            template = replacePlaceholders(template, "name", intern.getName());
            template = replacePlaceholders(template, "role", intern.getRole());
            template = replacePlaceholders(template, "email", intern.getEmail());
            template = replacePlaceholders(template, "id", intern.getId());
            template = replacePlaceholders(template, "officeNumber" , intern.getOfficeNumber());
            return template;
          };

          const renderMain = html => {
            const template =fs.readFileSync(path.resolve(templateDir, "main.html"));
            return replacePlaceholders(template, "team", html);
          };

          const replacePlaceholders = (template, placeholders, value) => {
            const patren = new RegExp("{{ " + placeholder + " }}","gm");

          };

          module.exports = render;

          
      
      

  
  
    
