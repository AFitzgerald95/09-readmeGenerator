// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== '') {
    return ''
  } 
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== '') {
    return ''
  } 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== '') {
    return ''
  } 
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {
    title,
    description,
    tableOfContents,
    installationInstructions,
    usage,
    contributionGuidelines,
    gitHub,
    testInstructions,
    email,
    license,
  } = data;

  return `
  # ${title}

  ## Description
  ${description}

  ## Table of Contents
  ${tableOfContents}

  ## Installation
  ${installationInstructions}

  ## Usage
  ${usage}

  ## Contribution Guidelines
  ${contributionGuidelines}

  ## Github
  ${gitHub}

  ## Test
  ${testInstructions}

  ## License
  ${renderLicenseBadge(license)}
  ${renderLicenseLink(license)}
  ${renderLicenseSection(license)}

  ## Questions
  For any questions, please contact me:

  Github: [${gitHub}](https://github.com/${gitHub})

  Email: [${email}](mailto:${email})
`;
}

module.exports = generateMarkdown;
