// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
switch (data.license) {
  case "No License":
    return "";
  case "MIT":
    return `Click here for license info -> [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  case "Mozilla":
    return `Click here for license info -> [![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  case "Apache":
    return `Click here for license info -> [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  case "Boost":
    return `Click here for license info -> [![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
}
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  switch (data.license) {
    case "No License":
      return "";
    default:
      return `## License`
  }
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
return `# ${data.title}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Installation

${data.installation}

## Usage

${data.usage}

## Credits

${data.credits}

## Tests

${data.tests}

## Questions

Please find me on GitHub -> https://github.com/${data.github}

Please email me with any questions you have -> ${data.email}

${renderLicenseSection(data)}

${renderLicenseBadge(data)}
`;
}

module.exports = generateMarkdown;
