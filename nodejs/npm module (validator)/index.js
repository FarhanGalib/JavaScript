const validator = require('validator');

console.log(validator.isEmail('fgpsoft@gmail.com'));
console.log(validator.isJSON(JSON.stringify({name:'Farhan'})));
console.log(validator.isURL('https://www.npmjs.com/package/validator'));
console.log(validator.isPort('3000'));

