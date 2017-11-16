var randomNo = document.getElementById("randomNo");

randomNo = function getRandomInt(1000, 2500) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

document.append(randomNo);

//Reference https://css-tricks.com/generate-a-random-number/ to remind me about <div>
var quoteNo = document.getElementById("quoteNo");
var fs = require("fs");
var content = fs.readFileSync("quoteCount.json");
console.log(content[0]);
quoteNo = content[0];
document.append(quoteNo);
