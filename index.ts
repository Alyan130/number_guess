#! /usr/bin/env node

import inquirer from "inquirer";

console.log("Enter number between 1 to 6");
const randomNumber=Math.floor(Math.random()*6+1);
const userInput=await inquirer.prompt([
    {message:"please enter a number to guess: ",type:"number",name:"guessedNumber"}
])
if(randomNumber==userInput.guessedNumber){
    console.log("Guessed number is correct!!!");
}else{
    console.log("Try again...");
}
console.log("Thank you");