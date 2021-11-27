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
</body>
</html>
`;
}
 


//function to prompt the manager questions at the beginning of the app
function init () {
    inquirer.prompt(questions)
    .then(function(data){
     fs.writeFileSync("index.html", generatePage (data));
     console.log(data);
     console.log("file created");
    })
}

//calls manager questions 
init();


