function renderLicenseBadge(data) {
    switch (data){
        case "Apache 2.0":
            return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
        case "MIT":
            return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
        case "Boost Software License 1.0":
            return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
        case "BSD 3-Clause License":
            return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
        default: 
            return ""
    }
}
function renderLicenseLink(data) {
    switch (data) {
        case "Apache 2.0":
            return "https://opensource.org/licenses/Apache-2.0"
        case "MIT":
            return "https://opensource.org/licenses/MIT"
        case "Boost Software License 1.0":
            return "https://www.boost.org/LICENSE_1_0.txt"
        case "BSD 3-Clause License":
            return "https://opensource.org/licenses/BSD-3-Clause"
        default: 
            return ""
    }
}

function renderLicenseText(data) {
    switch (data) {
        case "Apache 2.0":
            return "For this project the Apache 2.0 license was utilized"
        case "MIT":
            return "For this project the MIT license was utilized"
        case "Boost Software License 1.0":
            return "For this project the Boost Software License 1.0 license was utilized"
        case "BSD 3-Clause License":
            return "For this project the BSD 3-Clause License license was utilized"
        default: 
            return ""
    }
}









const generateReadMe = (data) => {
    return `# ${data.title}


${renderLicenseBadge(data.license)}
    
## Description
    
${data.description}
    
## Table of Contents
 
* [Installation](#Installation) 
    
* [Usage](#Usage)
    
* [Contributing](#Contributing)
    
* [Tests](#Tests)
    
* [Questions](#Questions)
    
## Installation
    
To install this application run the folllowing command:
    
${data.installation}
    
## Usage
    
This applcation was the following usage limitations:

${data.usage}

## License

This project utilized the ${renderLicenseText(data.license)} license. 

More information about this license is available at ${renderLicenseLink(data.license)}.
    
## Contibutions
    
These individuals were involved in the development of this project:

${data.contributions}
    
## Tests
    
In order to test the the application, type this into the command line - ${data.tests}
    
## Questions
  
If you have any questions or comments please contact me at [${data.email}](${data.email}). If you're interested in checking out any of my other projects, visit [My github](http://github.com/${data.userName}).
 
`
 
 }
   


module.exports = generateReadMe;