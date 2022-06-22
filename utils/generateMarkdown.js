// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== null){
    return "![![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)]";
  } else {
    return "";
  }
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== null) {
    return `\n* [License] (license)\n`;
  } else {
    return ``;
  }
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== null) {
    return `## License
  
    The content of this site is licensed under the ${license}
    `;
  }

}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

## Descriptiom

${data.description}

## Table of Contents

-[Installation] (#installation)
-[Usage] (#usage)
-[Contributions] (#contributionms)
-[Tests] (#test)
-[Questions] (#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Contributions

${data.contributions}

## Tests

${data.test}

## Questions

Have a question? Feel free to email me at (${data.email}) or reach out at my Github (https://github.com/${data.github}):^).

`;
}

module.exports = generateMarkdown;
