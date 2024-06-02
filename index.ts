#! /usr/bin/env node
import inquirer from "inquirer";

const quiz : {
    question_1: string;
    question_2: string;
    question_3: string;
    question_4: string;
    question_5: string;
 } = await inquirer.prompt([
    {
        name:"question_1",
        type: "list",
        message :"Q1.What is the correct way to check if two values are not equal in TypeScript?",
        choices:["a  == b","a === b","a = b","a !==b"]
    },
    {
        name:"question_2",
        type: "list",
        message :"Q2.Which of the following characters is commonly allowed in varible name in TypeScript?",
        choices:["$","@","#","&"]
    },
    {
        name:"question_3",
        type: "list",
        message :"Q3.Which operators is commonly used for string concatenation in TypeScript?",
        choices:["+","-","*","/"]
    },
    {
        name:"question_4",
        type: "list",
        message :"Q4.In TypeScript, which symbol is commonly used to terminate a satetment?",
        choices:[".",":",";",","]
    },
    {
        name:"question_5",
        type: "list",
        message :"Q5.Which method of Inquirer.js is used to start the prompt inferface and receive user input?",
        choices:["start()","prompt()","init()","run()"]
    },
 ])
 let score: number = 0;

 switch (quiz.question_1){
    case "a !==b" :
        console.log("Q1.Correct!");
        ++score;
        break;
        default:
        console.log("Q1.InCorrect");
 }
 switch (quiz.question_2){
    case "$" :
        console.log("Q2.Correct!");
        ++score;
        break;
        default:
        console.log("Q2.InCorrect");
 }

 switch (quiz.question_3){
    case "+" :
        console.log("Q3.Correct!");
        ++score;
        break;
        default:
        console.log("Q3.InCorrect");    
 }

 switch (quiz.question_4){
    case ";" :
        console.log("Q4.Correct!");
        ++score;
        break;
        default:
        console.log("Q4.InCorrect");
            
 }
 switch (quiz.question_5){
    case "prompt()" :
        console.log("Q5.Correct!");
        ++score;
        break;
        default:
        console.log("Q5.InCorrect");
            
 }
 console.log(`score:${score}`);
 