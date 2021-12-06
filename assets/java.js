//creating preset variables
let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lowerCase= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let nums=["0","1","2","3","4","5","6","7","8","9"];
let special= [".",":",";","@","!","*","#","&","-","_","+","%"];
//creating a button variable to access the html button
var button = document.getElementById("button");
//adding an event listener to check if user clicked the generate password button
button.addEventListener('click', activated);
//creating a function that will help create a random password
function activated(){
//creating two new array variables to hold new arrays that will be created in the future
var pass= [];
var password=[];    
console.log(numCharacters)
//creating a variable to hold the number of characters the 
var numCharacters = window.prompt("How many Characters would you like your password to be? must be atleast 8 characters");
console.log(numCharacters)
//checking if the user's input is valid
if (numCharacters === null) {
    return;
    
}  
if (numCharacters < 8 || numCharacters > 128 ){
    window.alert("the passwrod must be atleast 8 characters and no more than 128 characters");
    numCharacters= undefined;
    return;
}
console.log(numCharacters)
//asking user if they want uppercase letters in their password
if (confirm("Would you like to use upper case letters?")) {
    pass= pass.concat(upperCase);
  } 
  console.log(pass)
//asking user if they want lowercase letters in their password
if (confirm("Would you like to use lower case letters?")) {
    pass= pass.concat(lowerCase);
  } 
  console.log(pass)
//asking user if they want numbers in their password
if (confirm("Would you like to use numbers?")) {
    pass= pass.concat(nums);
  } 
  console.log(pass)
//asking user if they want special characters in their password
if (confirm("Would you like to use special characters?")) {
    pass= pass.concat(special);
  } 
  console.log(pass)
//shuffling the array pass to ensure the capture of all the required criterias
//this method is called Fisher Yates shuffle and I obtained the sample code from W3schools
//I further modified the code to fit my program needs 
for (let i = pass.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * i)
    let k = pass[i]
    pass[i] = pass[j]
    pass[j] = k
  }
  console.log(pass)
  console.log(numCharacters)
// creartin an array that will hold randomly selected characters that will make up the generated password
for (let i = 0; i <= numCharacters-1; i ++){
    password= password.concat( pass [Math.floor(Math.random() * pass.length-1)]);
    console.log(password)
  }
  console.log(password)
//converting the array into a string to be able to display the password as one word
  var outPut= password.join("");
  console.log(outPut)
  document.getElementById("password").innerHTML = outPut;
}
