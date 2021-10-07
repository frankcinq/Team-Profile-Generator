// Display a prompt where the user puts in information for a employee
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const prompts = require("./src/prompts");
// add prompt questions for user
let questions = [];
let team = [];

// app start
function start() {
  // inquirer.prompt(prompt.basicInfoPrompt);
  prompts.basicInfoPrompt();
}

start();
//MANAGER: team manager’s name, employee ID, email address, and office number
//**Which type of employee do you wish to add */
//Possible options - intern, engineer, or none
//ENGINEER: engineer’s name, ID, email, and GitHub username,
//Intern: intern’s name, ID, email, and school

// ask if user wants to make another employee

// insert prompt answers into html page for display
// Create a template for each employee
// create template for the main html page
