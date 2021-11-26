const inquirer = require('inquirer');

//manager questions
const questions = [
        {
        type: 'input',
        name: 'manager',
        message: 'Enter the name of the manager.',
        },
        {
        type: 'input',
        name: 'id',
        message: 'Enter the employee ID of the manager.',
        },
        {
        type: 'input',
        name: 'email',
        message: 'Enter the email address of the manager.',
        },
        {
        type: 'input',
        name: 'office',
        message: 'Enter the office number for the manager',
        },

];

//function to prompt the manager questions at the beginning of the app
function init () {
    inquirer.prompt(questions);
}

//calls manager questions 
init();