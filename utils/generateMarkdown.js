// Based off of the license the user selects, returns the badge associated 
function renderLicenseBadge(license) {
    let licenseBadges = {

        'APACHE 2.0': `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`,

        'GNU LGPLv3': `![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)`,

        'BSD 3': `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`,

        'IPL 1.0': `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`,

        'ISC': `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`,

        'MIT"': `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,

        'MPL 2.0': `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`,

        'None': '',
    }
    return licenseBadges[license]
}


// Based off of the license the user selects, returns the link associated 
function renderLicenseLink(license) {
    let licenseLink = {
        'APACHE 2.0': `https://opensource.org/licenses/Apache-2.0`,

        'GNU LGPLv3': `https://www.gnu.org/licenses/gpl-3.0`,

        'BSD 3': `https://opensource.org/licenses/BSD-3-Clause`,

        'IPL 1.0': `https://opensource.org/licenses/IPL-1.0`,

        'ISC': `https://opensource.org/licenses/ISC`,

        'MIT"': `https://opensource.org/licenses/MIT`,

        'MPL 2.0': `https://opensource.org/licenses/MPL-2.0`,

        'None': '',
    }
    return licenseLink[license]
}

// Combines the license user chooses and link associated to create a cohesive section
function renderLicenseSection(license) {
    return `Licensed with ${license}. For more information visit ${renderLicenseLink(license)}`
}

// Begins generation of README based off of user input data and makes it pretty
function generateMarkdown(data) {
    return `# ${data.title}
  
## Table of Contents
  
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contribution](#contribution)
5. [Test](#test)
6. [License](#test)
7. [Github](#github)

${renderLicenseBadge(data.license)}
## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contribution
${data.contribution}

## Test Instructions
${data.test}

## License
${renderLicenseSection(data.license)}

## Github
Find more of my work here ${data.github}

## Contact
If you want to contact me email me at ${data.email}
`;
}

module.exports = generateMarkdown;