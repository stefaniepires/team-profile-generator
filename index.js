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
    const valid = /^[0-9]+$/.test(idInput);

    if (valid) {
        return true;
    } else {
        return "Please enter a number";
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

  .then(data => {
    const name =data.name;
    const id = data.id;
    const email = data.email;
    const phoneNumber = data.phoneNumber;
    const employee = new Manager(name, id, email, phoneNumber);
    teamArray.push(employee);
    addEmployee();
  })
}

function addEmployee() {
  inquirer.prompt([
    {
      type: "list",
      name: "addEmployee",
      message: "Would you like to add team members now?",
      choices: ["Yes, add an Engineer", "Yes, add an Intern", "No, I am done."]
    }
  ])

  .then(data => {

    switch (data.addEmployee) {
      case "Yes, add an Engineer":
        addEngineer();
        break;

      case "Yes, add an Intern":
        addIntern();
        break;

      case "No, I am done.":
        completeTeam();
        break;         
    }
  });

}

function addEngineer() {
  inquirer.prompt([
{
  message: "Please enter the Engineer's name. (Required)",
  name:"name",
  validate: nameInput => {
    if (nameInput) {
        return true;
    } else {
        return "Please enter the Engineer's name";
    }
}
}, 

{
  message: "Please enter the Engineer's employee ID",
  name: "id",
  validate: idInput => {
      const valid = /^[0-9]+$/.test(idInput);

      if (valid) {
          return true;
      } else {
          return "Please enter a number";
      }
  }
},
{
  message: "Please enter the Engineer's email address. (Required)",
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
  message: "Please enter the Engineer's Github profile.",
  name: "github"
}

])

.then(data => {
  const name = data.name;
  const id = data.id;
  const email = data.email;
  const github = data.github;
  const employee = new Engineer(name, id, email, github);
    teamArray.push(employee);
    addEmployee();
});


}


function addIntern() {
inquirer.prompt([
{
  message: "Please enter the Intern's name. (Required)",
  name: "name",
  validate: nameInput => {
    if (nameInput) {
        return true;
    } else {
        return "Please enter the Intern's name";
    }
}
}, 

{
  message: "Please enter the Intern's employee ID.",
  name: "id",
  validate: idInput => {
      const valid = /^[0-9]+$/.test(idInput);

      if (valid) {
          return true;
      } else {
          return "Please enter a number";
      }
  }
},
{
  message: "Please enter the Intern's email address. (Required)",
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
  message: "Please enter the school that the Intern is currently attending.",
  name: "school"
}


])

.then(data => {
  const name = data.name;
  const id = data.id;
  const email = data.email;
  const school = data.school;
  const employee = new Intern(name, id, email, school);
    teamArray.push(employee);
    addEmployee();
});


  
}


function completeTeam() {

  
}
prompts();