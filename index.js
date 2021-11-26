const inquirer = require('inquirer');

const questions = [{
    type: 'input',
    name: 'manager',
    message: 'Enter the name of the Manager.',
}];

function init () {
    inquirer.prompt(questions);
}

init();