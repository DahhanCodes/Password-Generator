
let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lowerCase= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let nums=["0","1","2","3","4","5","6","7","8","9"];
let special= [".",":",";","@","!","*","#","&","-","_","+","%"];
var button = document.getElementById("button");
button.addEventListener('click', activated);

function activated(){
var pass= [];
var password=[];    
console.log(numCharacters)
var numCharacters = window.prompt("How many Characters would you like your password to be? must be atleast 10 characters");
console.log(numCharacters)
if (numCharacters === null) {
    return;
    
}  
if (numCharacters < 10 ){
    window.alert("the passwrod must be atleast 10 characters");
    numCharacters= undefined;
    return;
}
console.log(numCharacters)
if (confirm("Would you like to use upper case letters?")) {
    pass= pass.concat(upperCase);
  } 
  console.log(pass)
if (confirm("Would you like to use lower case letters?")) {
    pass= pass.concat(lowerCase);
  } 
  console.log(pass)
if (confirm("Would you like to use numbers?")) {
    pass= pass.concat(nums);
  } 
  console.log(pass)
if (confirm("Would you like to use special characters?")) {
    pass= pass.concat(special);
  } 
  console.log(pass)
for (let i = pass.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * i)
    let k = pass[i]
    pass[i] = pass[j]
    pass[j] = k
  }
  console.log(pass)
  console.log(numCharacters)
for (let i = 0; i <= numCharacters-1; i ++){
    password= password.concat( pass [Math.floor(Math.random() * pass.length-1)]);
    console.log(password)
  }
  console.log(password)
  var outPut= password.join("");
  console.log(outPut)
  document.getElementById("password").innerHTML = outPut;
}
