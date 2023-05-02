const inquirer = require(`inquirer`);
const fs = require(`fs`);

function promptUser() {
    inquirer.prompt ([
        {
            type:`input`,
            name: `text`,
            message: `Enter text to be displayed on logo (up to 3 characters long)`,
        },
        {
            type: `input`,
            name:`textColor`,
            message:`Select a color for the text`,
        },
        {
            type:`list`,
            name:`shape`,
            message:`Select a shape for the logo`,
            choices: [`square`, `circle`, `triangle`],
        },
        {
            type: `input`,
            name:`shapeColor`,
            message:`Select a color for the shape`,
        },
    ])
    .then((answers) => {
        // error for text input (needs to be 3 characters or less for logo)
        if (answers.text.length > 3) {
            console.log(`Error: Text must be 3 characters or less`);
            return;
        }
        else {
            writeToFile(`logo.svg`, answers);
        }
    });
}
// call function to prompt user for input
promptUser();