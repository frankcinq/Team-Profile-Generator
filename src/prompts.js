const inquirer = require("inquirer");
const Manager = require("../lib/Manager");
const Intern = require("../lib/Intern");
const Engineer = require("../lib/Engineer");

let team = [];

function basicInfoPrompt() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your employee's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is your employee's id?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your employee's email?",
      },
      {
        type: "list",
        name: "role",
        message: "What is your employee's role?",
        choices: ["Engineer", "Manager", "Intern", "Go back"],
      },
    ])
    .then((answers) => {
      // condtional statement that runs another prompt based off the role selection
      switch (answers.role) {
        case "Engineer":
          engineerPrompt(answers);
          break;
        case "Manager":
          managerPrompt(answers);
          break;
        case "Intern":
          internPrompt(answers);
          break;
        default:
          exit();
          break;
      }
    });
}

function internPrompt(info) {
  inquirer
    .prompt([
      {
        type: "input",
        name: "school",
        message: "What is your intern's school?",
      },
    ])
    .then((answers) => {
      const intern = new Intern(info.name, info.id, info.email, answers.school);
      // this employee to an array to create our team generator (may want to make a function to do this)
      team.push(intern);
      exit();
    });
}

function engineerPrompt(info) {
  inquirer
    .prompt([
      {
        type: "input",
        name: "github",
        message: "What is your github username?",
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        info.name,
        info.id,
        info.email,
        answers.github
      );

      // this employee to an array to create our team generator (may want to make a function to do this)
      team.push(engineer);
      exit();
    });
}

function managerPrompt(info) {
  inquirer
    .prompt([
      {
        type: "input",
        name: "manager",
        message: "What is your office number?",
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        info.name,
        info.id,
        info.email,
        answers.manager
      );

      // this employee to an array to create our team generator (may want to make a function to do this)
      team.push(manager);
      exit();
    });
}

function exit() {
  inquirer
    .prompt([
      {
        type: "confirm",
        message: "Do you want to create another employee?",
        name: "bool",
      },
    ])
    .then((answers) => {
      if (answers.bool) {
        basicInfoPrompt();
      } else {
        //this is where I generate HTML:
        //fs.writefile(location of file, team)
        //convert javascript to html
        return;
      }
    });
}

module.exports = {
  basicInfoPrompt,
  engineerPrompt,
  internPrompt,
  managerPrompt,
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// const prompts = require("./path/to/prompts"); // how to import module

// prompts.basicInfoPrompt() // how to call module functions

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// const { basicInfoPrompt, engineerPrompt, internPrompt, managerPrompt } = require("./path/to/prompts");  // how to import module

// basicInfoPrompt() // how to call module functions

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// const prompts = {
//   function1() {

//   },
//   function2() {

//   },
//   function3() {

//   },
//   function4() {

//   }
// }

// module.exports = prompts // how to export module

// const prompts = require("./path/to/prompts") // how to import module

// prompts.function1() // how to call module functions
