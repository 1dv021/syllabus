require("./hello");
var greetings = require("./greetings");
var User = require("./User");

console.log(greetings.sayHelloInEnglish());
console.log(greetings.sayHelloInSpanish());
//console.log(greetings.sayHelloInSwedish());

var user = new User("Ellen Nu", "en@lnu.se");

console.log(user);
