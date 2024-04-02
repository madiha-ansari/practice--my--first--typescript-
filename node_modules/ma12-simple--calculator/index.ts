#! /usr/bin/env node

import inquirer from "inquirer" 

const answer = await inquirer.prompt([
    {message: "Enter your First Number", type: "number",name: "firstNumber" } ,
    {message: "Enter your Second Number", type: "number",name: "secondNumber"} ,
    {message: "Please Select one Of Your Operator to Perform operation", type: "list", name: "operator",
        choices: ["addition","subtraction","multiplication","divide"] , }
]) ;

//Conditional Statement

if(answer.operator === "addition"){
    console.log(answer.firstNumber + answer.secondNumber)} 
else if (answer.operator === "subtraction"){
    console.log(answer.firstNumber - answer.secondNumber)} 
else if (answer.operator === "multiplication"){
    console.log(answer.firstNumber * answer.secondNumber)} 
else if (answer.operator === "divide"){
    console.log(answer.firstNumber / answer.secondNumber)} 
else {
    console.log("Please Select Valid Operator")
} ;




