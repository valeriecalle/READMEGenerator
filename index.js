// TODO: Include packages needed for this application

const fs = require("fs");
const inquirer = require("inquirer");
const createmarkdown = require('./utils/createmarkdown.js');




// TODO: Create an array of questions for user input
const options = [
     
     {
        type: 'input',
        name: 'title',
        message: 'Title of project',
       
    },
   // Option to Generate Description 
    {
      type: 'input',
      name: 'description', 
      message: 'Proyect Description',
    
    },
    // Option to Generate the installation 
    {
        type: 'input',
        name: 'installation',
        message: 'How to install the application'
    },
    // Option to Generate usag of the app
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and usage examples'        
    },
    // Option to Generate Multiple choice of licence  
    {
        type: 'list',
        name: 'license',
        message: 'Choose the license of your project',
        choices: ['MIT License', 'Apache License 2.0', 'GNU v3.0', 'The Unlicense']
    },
    // Confirm collaborators
    {
        type: 'confirm',
        name: 'credits',
        message: 'List your collaborators',
        default: true
    },
    // Confirm collaborators Contributers
    {
        type: 'input',
        name: 'contribute',
        message: 'Describe how to contribute.',
        when: ({ confirmContributers }) => {
            if (confirmContributers) {
                return true;
            } else {
                message: 'No contribution needed';
                // return false;
            }
        },
        validate: contributerInput => {
            if (contributerInput) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'Instructions to run the code',
    },

    // Register Github and Email 

    {
        type: 'input',
        name: 'githubUsername',
        message: 'Type your GitHub username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Write here your e-mail address',
    },
];

// TODO: Create a function to write README file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./CreateReadme/updateReadme.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'Readme updated successfully'
            });
        });
    });
};

// TODO: Create a function to initialize app
const init = () => {

    return inquirer.prompt(options)
    .then(readmeData => {
        return readmeData;
    })
}
init()

.then(readmeData => {
    console.log(readmeData);
    return createmarkdown(readmeData);
})
.then(pageMD => {
    return writeFile(pageMD);
})
.then(writeFileResponse => {
    console.log(writeFileResponse.message);
})
.catch(err => {
    console.log(err);
})
