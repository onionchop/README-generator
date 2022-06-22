badge = " ";
link = " ";

// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (data.license === "Eclipse Public"){
    badge = "![](https://img.shields.io/badge/License-EPL%201.0-red.svg)"
    return badge;

  } else if (data.license === "IBM"){
    badge = "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
    return badge;

  } else if (data.license === "MIT") {
    badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    return badge;

  } else if (data.license === "Zlib"){
    badge = "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)"
    return badge;
  }
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
    if (data.license === "Eclipse Public"){
      link = "https://opensource.org/licenses/EPL-2.0"
      return link;

    } else if (data.license === "IBM"){
      link = "https://opensource.org/licenses/IPL-1.0"
      return link;

    } else if (data.license === "MIT"){
      link = "https://opensource.org/licenses/MIT"
      return link;

    } else if (data.license === "Zlib"){
      link = "https://opensource.org/licenses/Zlib"
      return link;

    }

}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  return `
  ## License

  This project is covered by the [${data.license}](${renderLicenseLink(data)}) licence.
  `
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

Have a question? Feel free to email me at (${data.email}) or reach out at my Github (https://github.com/${data.github})
:^).

`;
}

module.exports = generateMarkdown;
