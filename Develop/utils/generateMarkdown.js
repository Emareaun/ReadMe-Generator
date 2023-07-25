// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (!license) {
      return "";
    }
  
    const badgeUrl = `https://img.shields.io/badge/License-${license}-blue.svg`;
    const badgeHtml = `<a href="${badgeUrl}" target="_blank">[${license}]</a>`;
  
    return badgeHtml;
  }
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    if (!license) {
      return "";
    }
  
    const licenseUrl = `https://opensource.org/licenses/${license}`;
  
    return licenseUrl;
  }
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if (!license) {
      return "";
    }
  
    const licenseBadge = renderLicenseBadge(license);
    const licenseLink = renderLicenseLink(license);
  
    return `
    ## License
    
    ${licenseBadge}
    
    This project is licensed under the ${license} license.
    
    [${licenseLink}]
    `;
  }
  
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    const title = data.title;
    const description = data.description;
    const license = data.license;
  
    const markdown = `
    # ${title}
    
    ${description}
    
    ## License
    
    ${renderLicenseSection(license)}
    `;
  
    return markdown;
  }
  
  // Export all functions together as an object
  module.exports = {
    renderLicenseBadge,
    renderLicenseLink,
    renderLicenseSection,
    generateMarkdown,
  };
  