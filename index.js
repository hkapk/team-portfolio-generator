const inquirer = require('inquirer');
const generateTeam = require('./src/page-template');
const fs = require('fs');


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
        {
        type: 'list',
        name: 'updateEmployee',
        message: 'Would you like to add an Engineer, Intern or finish building your team',
        choices: ['Engineer', 'Intern', 'Done'],
        },
        {
        type: 'input',
        name: 'engineerName',
        message: 'Enter the name of the Engineer',
        },
        {
        type: 'input',
        name: 'engineerId',
        message: 'Enter the ID number for the Engineer',
        },
        {
        type: 'input',
        name: 'engineerEmail',
        message: 'Enter a valid email address for the Engineer',
        },
        {
        type: 'input',
        name: 'engineerGithub',
        message: 'Enter a the github username Engineer',
        },
        {
        type: 'list',
        name: 'intern',
        message: 'Would you like to add an Engineer, Intern or finish building your team',
        choices: ['Engineer', 'Intern', 'Done'],
        },
        {
        type: 'input',
        name: 'internName',
        message: 'Enter the name of the Intern',
        },
        {
        type: 'input',
        name: 'internId',
        message: 'Enter the ID number for the Intern',
        },
        {
        type: 'input',
        name: 'internEmail',
        message: 'Enter a valid email address for the Intern',
        },
        {
        type: 'input',
        name: 'school',
        message: 'Enter the school or university that the intern is from.',
        },
        {
        type: 'list',
        name: 'done',
        message: 'Would you like to add an Engineer, Intern or finish building your team',
        choices: ['Engineer', 'Intern', 'Done'],
        },
        
    
];
//function to return the inquirer data

//generate the HTML file
function generatePage(data) {
    return `
<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta http-equiv="X-UA-Compatible" content="ie=edge" />
<title>My Team</title>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<link rel="stylesheet" href="style.css">
<script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
<div class="container-fluid">
    <div class="row">
        <div class="col-12 jumbotron mb-3 team-heading">
            <h1 class="text-center">My Team</h1>
        </div>
    </div>
</div>
<div class="container">
    <div class="row">
        <div class="team-area col-12 d-flex justify-content-center">
        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${data.manager}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i> Manager </h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${data.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${data.email}">${data.email}</a></li>
                <li class="list-group-item">Office number: ${data.office}</li>
            </ul>
        </div>
        </div>
        </div>
    </div>
</div>

<div class="container">
    <div class="row">
    <div class="team-area col-12 d-flex justify-content-center">
<div class="card employee-card">
<div class="card-header">
    <h2 class="card-title">${data.engineerName}</h2>
    <h3 class="card-title"><i class="fas fa-glasses mr-2"></i> Engineer </h3>
</div>
<div class="card-body">
    <ul class="list-group">
        <li class="list-group-item">ID: ${data.engineerId}</li>
        <li class="list-group-item">Email: <a href="mailto:${data.engineerEmail}">${data.engineerEmail}</a></li>
        <li class="list-group-item">GitHub: <a href="https://github.com/${data.engineerGithub}" target="_blank" rel="noopener noreferrer">${data.engineerGithub}</a></li>
    </ul>
</div>
</div>
</div>
</div>
</div>

<div class="container">
    <div class="row">
    <div class="team-area col-12 d-flex justify-content-center">
<div class="card employee-card">
<div class="card-header">
    <h2 class="card-title">${data.internName}</h2>
    <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i> Intern </h3>
</div>
<div class="card-body">
    <ul class="list-group">
        <li class="list-group-item">ID: ${data.internId}</li>
        <li class="list-group-item">Email: <a href="mailto:${data.internEmail}">${data.internEmail}</a></li>
        <li class="list-group-item">School: ${data.school}</li>
    </ul>
</div>
</div>
</div>
</div>
</div>
<footer>
   <div class="text-center"> Made by Hank </div>
</footer>
</body>

</html>
`;
}
 


//function to prompt the manager questions at the beginning of the app
function init () {
    inquirer.prompt(questions)
    .then(function(data){
     fs.writeFileSync("./dist/index.html", generatePage (data));
     //console.log(data);
     console.log("file created");
    })
}

//calls manager questions 
init();


