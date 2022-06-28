function generateMarkdown(data) {
  return `# ${data.title}
  ##License:
  [![license](https://img.shields.io/badge/license-${data.license}-blue.svg)]
  ## Table of Content
  -[Description](#description)
  -[Usage](#usage)
  -[Installation](#installation)
  -[Contribution](#contribution)
  -[Testing](#testing)
  -[Additional Info](#additional-info)
  
   # Description:
  ${data.description}
  
  # Usage:
  ${data.usage}

  # Installation:
  ${data.installation}
  
  # Contribution:
  ${data.contribution}

  # Testing:
  ${data.testing}

  # Github
  

  # Email



`}
module.exports = generateMarkdown;
  
  
  
  
  
  
  
  
  
  
  
