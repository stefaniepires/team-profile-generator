const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');

let teamArray = [];

function prompts () {
  inquirer.prompt([
    {
      message: "Please enter your team's Name",
      name: "team"
    }
  ])
  .then(data => {
    const team = data.team;
    teamArray.push(team);
    addManager();
  })
}

function addManager() {
  inquirer.prompt([
{
  message: "Please enter the team Manager's name. (Required)",
  name: "name",
  validate: nameInput => {
    if (nameInput) {
      return true;
    } else {
      return "Please enter the team Manager's name";
    }
  }
},

{
  message: "Please enter the team Manager's employee ID. (Required)",
  name: "id",
  validate: idInput => {
    if (idInput) {
      return true;
    } else {
      return "Please enter the team Manager's employee ID";
    }
  }
},
{
message: "Please enter the team Manager's email address. (Required)",
name: "email",
validate: email => {
  const valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

  if (valid) {
    return true;
  } else {
    return "Please enter a valid email address";
  }
}
},

{
  type: "number",
  message: "Please enter the team Manager's phone number? (Only include numbers, for example: 2144694940 and NOT 214-469-4940)",
  name: "phoneNumber"
},


  ])
}
prompts();