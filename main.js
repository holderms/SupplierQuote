var username = document.getElementById("username");
var password = document.getElementById("password");

if(username === "employeeTest" && password === "testpassword"){
  //https://stackoverflow.com/questions/503093/how-to-redirect-to-another-webpage
  console.log("Received")
  window.location.replace("EnterQuote/index.html");
} else {
  console.log("Wrong username/password combination. Please try again.")
}
