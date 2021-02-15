const inquirer =  require('inquirer');
const fs = require('fs');
const util = require('util');
const generatePage = require('./src/generate-page');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { choices } = require('yargs');
const Choice = require('inquirer/lib/objects/choice');

const userInput = () => {
    console.log('Ready to build your team? lets start with your Manager!')

     inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter your Manager's name (Required)",
            validate: name => {
                if(name) {
                    return true;
                } else {
                    console('You need to enter a name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter your Manager's email"
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the Manager's ID number"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter the Manager's office number"
        }
    ]).then( data => {
        const Manager = new Manager(data.name, data.id, data.email, data.officeNumber);
        employees.push(manager);
        return roleChoices();
    })
}

 const addEngineer = () => {
     inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter your Engineer's name (Required)",
            validate: name => {
                if(name) {
                    return true;
                } else {
                    console('You need to enter a name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter your Engineer's email"
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the Engineer's ID number"
        },
        {
            type: 'input',
            name: 'github',
            message: "Enter your Engineer's Github"
        }
        ]).then( data => {
            const Engineer = new Engineer(data.name, data.id, data.email, data.github);
            employees.push(engineer);
            return roleChoices();
        })
}

const addIntern = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is your Intern's name? (Required)",
            validate: name => {
                if(name) {
                    return true;
                } else {
                    console.log('You need to enter a name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your Intern's email"
        },
        {
            type: 'Input',
            name: 'id',
            message: "what is the Intern's ID number?"
        },
        {
            type: 'input',
            name: 'school',
            message: "what school does the Intern attend?"
        }
    ]).then( data => {
        const Intern = new Intern(data.name, data.id, data.email, data.school);
        employees.push(intern);
        return roleChoices();
    })
}

const none = () => {
    createPage();
}

const roleChoices = () => {
     inquirer.prompt([
         {
             type: 'list',
             name: 'roles',
             message: "Would you like to add another Employee?",
             choices: ['Manager', 'Engineer', 'Intern', 'None']
         }
        ]).then(choice => {
            switch(choice.roles) {
                case 'Manager':
                    userInput();
                    break;
                case 'Engineer':
                    addEngineer();
                    break;
                case 'Intern':
                    addIntern();
                    break;
                case 'None':
                    none();
                    break;
            }
        })
}

const createPage = (fileName) => {
    fileName = fs.writeFile('./dist/index.html', generatePage(employees), err => {
        if (err) {
            console.log("Error: ", err)
            return;
        } else {
            console.log("Your team has been compiled!");
        }
    });
};

userInput();