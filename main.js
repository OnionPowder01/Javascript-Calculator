// Declare global variables and initialize

let a = prompt("Please enter a number:");
let b = prompt("Please enter a second number:")
let c = prompt("What operator would you like to use (+ , - , * , /):");
let num1 = parseInt(a);
let num2 = parseInt(b);
let operator = c;

let tempNum1Array = [];
let tempNum2Array = [];
let savedFirstValue = 0;
let operator1 = "";
let tempOperatorArray = [];

// Basic sub-functions for the math ops 

add(num1, num2);
subtract(num1, num2);
multiply(num1, num2);
divide(num1, num2);

function add(num1, num2) {
    let addValue = num1 + num2;
    console.log(`add ${num1} by ${num2} = ${addValue}`);
}

function subtract(num1, num2) {
    let subtractValue = num1 - num2;
    console.log(`subtract ${num1} by ${num2} = ${subtractValue}`);
}

function multiply(num1, num2) {
    let multiplyValue = num1 * num2;
    console.log(`multiply ${num1} by ${num2} = ${multiplyValue}`);
}

function divide(num1, num2){
    let divideValue = num1 / num2;
    

    if (divideValue == "Infinity"){
        return alert("Error!  Cannot divide by zero!  You should know better....");
    } else return console.log(`divide ${num1} by ${num2} = ${divideValue}`);
}


function operate (operator, num1, num2) {
    switch (operator) {
        case '+':
            console.log("passing through switch +");
            add(num1, num2);
            break;
        case '-':
            console.log("passing through switch -");
            subtract(num1, num2);
            break;
        case '*':
            console.log("passing through switch *");
            multiply(num1, num2);
            break;
        case '/':
            console.log("passing through switch /");
            divide(num1, num2)
    }       
}