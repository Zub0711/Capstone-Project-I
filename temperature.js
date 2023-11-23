//Compulsory task 1 
// This program is a metric temperature converter 
// The user inputs a calculation that they want to do 
// The user then inputs the number they want to convert

let userInput1 = prompt(`In which metric is the temperature you are converting ? 
C - Celsius 
F - Fahrenheit 
K - Kelvin`); 
// prompt user to input a number they would like to convert

let userNumber= parseFloat(prompt("Please enter the number you would like to convert"));
// Once the user inputs the number we ask the user to input the second metric temperature
// they want to convert 

let userInput2 = prompt(`To which metric would you like to convert the temperature
C - Celsius 
F - Fahrenheit 
K - Kelvin`);
// once the user inputs the unit they want to convert to.
// we will assign the variables.

let celsius = "C";
let  fahrenheit = "F";
let  kelvin = "K";
let CtoF = (userNumber * 9/5) + 32;
let CtoK = (userNumber) + 273.15;
let FtoC = (userNumber - 32)*5/9;
let FtoK = (userNumber - 32)*5/9 + 273.15; 
let KtoF = ( userNumber - 273.15)*9/5 + 32; 
let KtoC = userNumber - 273.15;



// Once the user input runs through the else if statement then 
//The program will output the converted temperature
//If not it will output "its not celsius,fahrenheit or kelvin" 


if(userInput1== celsius && userInput2 == fahrenheit){
    console.log(userNumber +  userInput1  ,"is",  CtoF + fahrenheit);
}
else if(userInput1== celsius && userInput2 == kelvin){
    console.log(userNumber +  userInput1  ,"is",  CtoK + kelvin);
}
else if(userInput1 == fahrenheit && userInput2 == celsius){
    console.log(userNumber +  userInput1  ,"is",  FtoC + celsius);
}
else if(userInput1 == fahrenheit && userInput2 == kelvin){
    console.log(userNumber +  userInput1  ,"is",  FtoK + kelvin);
}
else if(userInput1 == kelvin && userInput2 == celsius){
    console.log(userNumber +  userInput1  ,"is",  KtoC + celsius);
}
else if(userInput1 == kelvin && userInput2 == fahrenheit){
    console.log(userNumber +  userInput1  ,"is",  KtoF + fahrenheit);
}
else{
    console.log("Its not celsius,fahrenheit or kelvin");
}

