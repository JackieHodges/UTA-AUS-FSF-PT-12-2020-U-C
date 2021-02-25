const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
    {
      type: 'list',
      message: 'What languages do you know?',
      name: 'languages',
    },
    {
      type: 'input',
      message: 'What is your preferred method of communication?',
      name: 'communication',
    },
  ])
  .then(() =>
    fs.appendFile('log.txt', `${inquirer.prompt}\n`, (err) =>
    err ? console.error(err) : console.log('Commit logged!')
  ));


