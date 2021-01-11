const inquirer = require('inquirer');

class Employee {
  constructor(name = '', id = '', email = '') {
    this.name = name;
    this.id = id;
    this.email = email;
  }


getName() {
  inquirer
  .prompt({
    type: 'text',
    name: 'name',
    message: 'What is your name?'
  })
  .then(({ name }) => {
    this.employee = new Employee(name);
  });
}

}

  module.exports = Employee;

  