// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.license === "none" ? "" : "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"}  
  ## Title
  ${data.title} 
  
  ## Table of Contents
  * [Description](#Description)
  * [Installations](#Installations)
  * [How to Use This Application](#HowtoUseThisApplication)
  * [Credits](#credits)
  * [Questions](#questions)
  * [GitHub](#github)
  * [License](#license)
  
  ## Description
  ${data.description}
  ## Installations
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Credits
  ${data.credits}
  ## Tests
  ${data.projTest}
  ## Questions
  ${data.questions}
  ## GitHub
  ${data.github}
  ## License
`;
}

module.exports = generateMarkdown;