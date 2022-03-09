const generatePage = (teamObject) => {
  return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Generator</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
</head>

<body>
    <h1 class="bg-danger text-white text-center p-5 mb-5">My Team</h1>
    <div class="pt-4 d-flex flex-wrap justify-content-center">
        ${managerCard(teamObject.manager)}
        ${engineerCards(teamObject.engineers)}
        ${internCards(teamObject.interns)}
    </div>
</body> 
</html>`;
};

const managerCard = (manager) => {
  return `
<div class="mb-4 mt-1 mx-3">
<div class="card">
    <div class="card-body bg-primary text-white">
        <h2 class="card-title">${manager[0].name}</h2>
        <p class="card-text">
            <i class="fa fa-coffee" aria-hidden="true"></i>
            Manager
        </p>
    </div>
    <div class="list-container bg-light py-4 px-3 d-flex justify-content-center align-items-center">
        <ul class="list-group list-group-flush shadow-sm">
            <li class="list-group-item">ID: ${manager[0].id}</li>
            <li class="list-group-item">Email:
                <a href="mailto:${manager[0].email}"> ${manager[0].email}</a>
            </li>
            <li class="list-group-item">Office number: ${manager[0].office}</li>
        </ul>
    </div>
</div>
</div>`;
};
const engineerCards = (engineers) => {
  return `${engineers
    .map((engineer) => {
      return `
<div class="mb-4 mt-1 mx-3">
    <div class="card">
        <div class="card-body bg-primary text-white">
            <h2 class="card-title">${engineer.name}</h2>
            <p class="card-text">
                <i class="fa fa-glasses" aria-hidden="true"></i>
                Engineer
            </p>
        </div>
        <div class="list-container bg-light py-4 px-3 d-flex justify-content-center align-items-center">
            <ul class="list-group list-group-flush shadow-sm">
                <li class="list-group-item">ID: ${engineer.id}</li>
                <li class="list-group-item">Email:
                    <a href="mailto:${engineer.email}"> ${engineer.email}</a>
                </li>
                <li class="list-group-item">Github:
                    <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a>
                </li>
            </ul>
        </div>
    </div>
</div>`;
    })
    .join("")}`;
};
const internCards = (interns) => {
  return `${interns
    .map((intern) => {
      return `
    <div class="mb-4 mt-1 mx-3">
    <div class="card">
        <div class="card-body bg-primary text-white">
            <h2 class="card-title">${intern.name}</h2>
            <p class="card-text">
                <i class="fa fa-user-graduate" aria-hidden="true"></i>
                Intern
            </p>
        </div>
        <div class="list-container bg-light py-4 px-3 d-flex justify-content-center align-items-center">
            <ul class="list-group list-group-flush shadow-sm">
                <li class="list-group-item">ID: ${intern.id}</li>
                <li class="list-group-item">Email:
                    <a href="mailto:${intern.email}"> ${intern.email}</a>
                </li>
                <li class="list-group-item">School: ${intern.school}</li>
            </ul>
        </div>
    </div>
</div>`;
    })
    .join("")}`;
};

module.exports = { generatePage };
