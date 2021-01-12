const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const fs = require("fs");
const style = require("./src/style");

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

function generateHtml(teamArray) {
  return `./dist/${teamArray[0].toLowerCase().split(' ').join('-')}.html`
}

function generateTitle(teamArray) {
  return teamArray[0].replace(/\w\S*/g, txt => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}



function completeTeam() {
    console.log("You have now successfully created your team's profile");
  
    const htmlArray = [];
    const htmlBeginning = `
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>${generateTitle(teamArray)}</title>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">
            <style>
             ${style}
            </style>
        </head>
        <body>
            <div class="banner-bar">
                <h1>${teamArray[0]}</h1>
            </div>
            <div class="card-container">
    `;

    htmlArray.push(htmlBeginning);

    for (let i = 1; i < teamArray.length; i++) {
        let object = `
        <div class="member-card">
            <div class="card-top">
                <h2>${teamArray[i].name}</h2>
                <h2>${teamArray[i].role}</h2>
            </div>
            <div class="card-bottom">
                <p>ID: ${teamArray[i].id}</p>
                <p>Email: <a href="mailto:${teamArray[i].email}">${teamArray[i].email}</a></p>
        `;

        if (teamArray[i].phoneNumber) {
            object += `
            <p>Office Number: ${teamArray[i].phoneNumber}</p>
            `
        }

        if (teamArray[i].github) {
            object += `
            <p>GitHub: <a href="https://github.com/${teamArray[i].github}" target="_blank">${teamArray[i].github}</a></p>
            `
        }

        if (teamArray[i].school) {
            object += `
            <p>School: ${teamArray[i].school}</p>
            `
        }

        object += `
            </div>
            </div>
        `;

        htmlArray.push(object)
    }

    const htmlEnd = `
    </div>
    </body>
    </html>
    `;

    htmlArray.push(htmlEnd);

    fs.writeFile(generateHtml(teamArray), htmlArray.join(""), function (err) {
        if (err) {
            throw err;
        }
    })
}


prompts();