function generateMarkdown(data) {
  return `# ${data.title}
  ##License:
  [![license](https://img.shields.io/badge/license-${data.license}-blue.svg)]
  ## Table of Content
  -[Description](#description) \r\n
  -[Usage](#usage) \r\n
  -[Installation](#installation) \r\n
  -[Contribution](#contribution) \r\n
  -[Testing](#testing) \r\n
  -[Github](#github) \r\n
  -[Email](#email) \r\n
  -[Additional Info](#additional)
  
   # Description:
  ${data.description}
  
  # Usage:
  ${data.usage}

  # Installation:
  ${data.installation}
  
  # Contribution:
  ${data.contribution}

  # Testing:
  ${data.test}

  # Github:
  ${data.github}

  # Email:
  ${data.email}

  # Additional
  ${data.additional}

`
}
module.exports = generateMarkdown;
  
  
  
  
  
  
  
  
  
  
  
