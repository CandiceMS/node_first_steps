const chalk = require('chalk');
const figlet = require('figlet');
const greet = require('./greet');

const styledMessage = chalk.bgGreen.white(greet('Xola'));
const figletMessage = figlet.textSync(greet('Candice'));
// TO ADD ADDITIONAL STYLING, adjust as below...
// figlet.textSync(greet('Candice'), {
// font: 'Ghost',
// horizontalLayout: 'default'
// });

console.log(styledMessage);
console.log(figletMessage);

// console.log(figlet.fontsSync());
// (prints a list of available font styles)
