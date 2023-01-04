#! /usr/bin/env node

import inquirer from "inquirer";

let conversion = {
    "PKR":{
        "USD": 0.0044,
        "GBP": 0.0037,
        "PKR": 1    
    },
    "GBP":{
        "USD": 1.21,
        "PKR": 271.79,
        "GBP": 1
    },
    "USD":{
        "USD": 1,
        "PKR": 225.50,
        "GBP":0.83
    }
}

const answer:{
    from: "PKR"| "USD"| "GBP",
    to: "PKR"| "USD"| "GBP",
    amount: number
    } = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices: ["PKR","USD","GBP"],
        message: "Select Currency: "
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR","USD","GBP"],
        message: "Select Conversion: "
    },
    {
        type: "number",
        name: "amount",
        message: "Enter Amount: "
    },
]);

const {from, to, amount} = answer;

if(from && to && amount){
    let result = conversion[from][to] * amount;
    console.log(`Amount after conversion ${from} to ${to} is ${result}`);
}
else{
    console.log("Invalid input") 
}