// TODO: Create a function that returns a license badge based on which license is passed in

function renderLicenseBadge(license) {
  if (license !== 'no license') {
    return `
  ![badge](https://img.shields.io/badge/license-${license}-blue)
    `;
  } else {
    return ' ';
  }
}

// TODO: Create a function that returns the license link

function renderLicenseLink(license) {
  if (license !== 'No Licence needed') {
    return `
    [${license}](https://choosealicense.com/licenses/${license})
      `;
    } else {
      return ' ';
    }

}

// TODO: Create a function that returns the license section of README

function renderLicenseSection(license) {
  if (license !== 'No Licence needed') {
    return `
    ## License
    The application is covered under the following license:
    ${renderLicenseLink(license)}
      `;
    } else {
      return ' ';
    }


}

// TODO: Create a function to generate markdown for README
function createmarkdown(data) {
  return `
  
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table of Contents 
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Description

  ${data.description}

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}
  

  ${renderLicenseSection(data.license)}
  
  ## Contributing
  
  ${data.contributing}

  ## Tests

  ${data.test}

  ## Questions
  For any questions contact me using the following links:

  [GitHub](https://github.com/${data.githubUsername})
  
  [Email: ${data.email}](mailto:${data.email})
`;
}

module.exports = createmarkdown;
