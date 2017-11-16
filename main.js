var username = document.getElementById("username");
var password = document.getElementById("password");

var fs = require("fs");
var content = fs.readFileSync("userInfo.json");
console.log(content[0]);
fileUsername = content.username;
filePassword = content.password;
document.append(quoteNo);


if(username == fileUsername && password ==filePassword){
  //https://stackoverflow.com/questions/503093/how-to-redirect-to-another-webpage
  window.location.replace("EnterQuote.index");
}
