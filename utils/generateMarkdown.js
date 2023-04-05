// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// credit to https://naereen.github.io/badges/ and https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba for badge links
function renderLicenseBadge(license) {
  const links = [
    'https://img.shields.io/badge/License-MIT-blue.svg',
    'https://img.shields.io/badge/License-GPL_v2-blue.svg',
    'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg'
  ]

  if (license === 'MIT License') {
    return links [0];
  } else if (license === 'GNU GPL V2') {
    return links [1];
  } else if (license === 'Mozilla Public License 2.0') {
    return links [2];
  } else if (license === 'None') {
    return '';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const links = [
    'https://choosealicense.com/licenses/mit/',
    'https://www.gnu.org/licenses/old-licenses/gpl-2.0.html',
    'https://opensource.org/license/mpl-2-0/'
  ]

  if(license === 'MIT License') {
    return links [0];
  } else if (license === 'GNU GPL V2') {
    return links [1];
  } else if (license === 'Mozilla Public License 2.0') {
    return links [2];
  } else if (license === 'None') {
    return '';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  //let boilerplate = 'This project is licensed under '

  if (license === 'None') {
    return '';
  } else {
    return `This project is licensed under [$(license)]($(renderLicenseLink(license))) <br/>
    ![$(license)]($[renderLicenseBadge]))
    `;

  }

  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {title, description, installation, usage, contributing, test, license, github, email} = data;

  return `# ${data.title}

  ## Table of Contents
  -[Installation] (#installation)
  -[Usage] (#usage)
  -[License] (#license)

  ## Description
  ${description}

  ## Installation
  Required Installation: <br/>
  ${installation}

  ## Usage
  ${usage}

  ## Test
  Test needed: <br/>
  ${test}

  ## Contribute
  ${contributing}

  ## Contact me
  Here is my [GitHub Profile] (${github}) <br/>
  My email is ${email} 

  ## License 
  ${renderLicenseSection(license)}

`;
}

module.exports = generateMarkdown;
