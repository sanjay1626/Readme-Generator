# README.md Generator

## Description 
  
This project was designed as a homework assignment for UCSD Extension Web Development bootcamp.

This application emphasizes the use of Javascript using the Node & ES6.

This is a command-line application that runs with Node.js that dynamically generates a README.md file based on input about your project. 


## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Methodology](#methodology)
* [License](#license)
  

## Installation


To generate your own README, first run `npm install` in order to install the following npm package dependencies as specified in the `package.json`:
  * [`inquirer`](https://www.npmjs.com/package/inquirer) that will prompt you for your inputs from the command line 
  * [`axios`](https://www.npmjs.com/package/axios) to fetch your info from the GitHub API

The application itself can be invoked with `node index.js`.


## Usage 


![Gif demo of README-generator](readme-demo.gif)

When you run `node index.js`, the application uses the `inquirer` package to prompt you in the command line with a series of questions about your GitHub and about your project then takes your responses and uses `axios` to fetch your GitHub profile from the [GitHub API](https://developer.github.com/v3/), including your GitHub profile picture (avatar) and email if updated on GitHub account.

From there, the application will generate markdown and a table of contents for the README conditionally based on your responses to the Inquirer prompts.

The README will also include badges for your GitHub repo, then `fs.writeFile` is used to generate your project's README.md file. 


## Methodology

The application utilizes modularization by separating the GitHub API call and generation of the markdown into separate modules: `api.js` and `generateMarkdown.js`, respectively, inside the `utils` folder.

The application also utilizes, as much as possible, syntax and paradigms introduced in ES6 and beyond, including `arrow functions`, `const`, `let`, template literals, and `async/await` to handle the `inquirer`, `axios`, and `fs.writeFile` promises.


## License

MonkeyBrain Inc. 

---
# Languages
  + JavaScript
  + Node
  + ES6
  + API

## Questions?

![Developer Profile Picture](https://avatars0.githubusercontent.com/u/67669598?s=400&u=19d175b1f4d4635aee7ad1546f65324f82d48d96&v=4) 

Feel free to contact me with examples or any questions via the information below:

GitHub: [@sanjay1626](https://api.github.com/users/sanjay1626)

Email: snjgonsalves@gmail.com