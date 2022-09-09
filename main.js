// Declare global variables and initialize
let num1 = 0;
let tempNum1Array = [];
let num2 = 0;
let tempNum2Array = [];
let savedFirstValue = 0;
let operator = "";
let tempOperatorArray = [];

// Basic sub-functions for the math ops 

function add(num1, num2) {
    let addValue = num1 + num2;
    let rounded = Math.round((addValue + Number.EPSILON) * 100) / 100;
    rounded = rounded.toFixed(2);
    console.log("add", rounded);
}   const calcDisplay = document.querySelector(".display-box");
    calcDisplay.textContent = rounded;

function subtract(num1, num2) {
    let subtractValue = num1 - num2;
    let rounded = Math.round((subtractValue + Number.EPSILON) * 100) / 100;
    rounded = rounded.toFixed(2);
    console.log("subtract", rounded);
   const calcDisplay = document.querySelector(".display-box");
    calcDisplay.textContent = rounded;

} 

function multiply(num1, num2) {
    let multiplyValue = num1 * num2;
    let rounded = Math.round((multiplyValue + Number.EPSILON) * 100) / 100;
    rounded = rounded.toFixed(2);
    console.log("multiply", rounded);
    const calcDisplay = document.querySelector(".display-box");
    calcDisplay.textContent = rounded;
}

function divide(num1, num2){
    let divideValue = num1 / num2;
    

    if (divideValue == "Infinity"){
        return alert("Error!  Cannot divide by zero!  You should know better....");

    } else {
        let rounded = Math.round((divideValue + Number.EPSILON) * 100) / 100;
        rounded = rounded.toFixed(2);
        console.log("divide", rounded);
        const calcDisplay = document.querySelector(".display-box");
        calcDisplay.textContent = rounded;
    }
}

// Use operate variable to determine wich function to call

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
            divide(num1, num2);
            break;
        default:
            alert("ERROR!  Didn't receive an operator, or type not as expected!");
    }       
}

///////////////////////////////////////////
//  Calculator Advanced Features & Algo  //
//////////////////////////////////////////
function runCalculator() {

    function getNumberClicked() {
        const operandButtons = document.querySelectorAll(".operand");
        operandButtons.forEach((button) => {
            button.addEventListener('click', () => {
                console.log('hit me for first number!');
                savedFirstValue = button.getAttribute("value");
                console.log(savedFirstValue);
                const calcDisplay = document.querySelector(".display-box");

                // append to num1 if multiple numbers are pressed and display out

                if (operator == "") {
                    tempNum1Array.push(savedFirstValue);
                    console.log("show me the array1:", tempNum1Array);
                    num1 = tempNum1Array.join("");
                    console.log("saved first valuye is: ", num1);
                    calcDisplay.textContent = num1;
                } else {

                }
            })
        })

    }

}

// DOM for "Clear" Button
const clearButton = document.querySelector(".clear");
    clearButton.addEventListener('click' , () => {location.reload();}) //Refresh in the browser


// DOM for "+/-" Button 
const signButton = docucment.querySelector(".sign");
    signButton.addEventListener('click', () => {

        // append " +/- " to num1 and display out
        if (operator == '') {
            const calcDisplay = document.querySelector("#display");
            console.log("negative button registered here");
            tempNum1Array.splice(0 , 1,(tempNum1Array[0] * -1).toString());
            console.log("append the array with negative number: ", tempNum1Array);
            num1 = tempNum1Array.join("");
            calcDisplay.textContent = num1;

            // append " +/- " to numarra1 and display out
        } else { 
            const calcDisplay = document.querySelector("#display");
            console.log("negative button registered here on num2");
            tempNum2Array.splice(0 , 1,(tempNum2Array[0] * -1).toString());
            console.log("append the array with negative number: ", tempNum2Array);
            num2 = tempNum2Array.join("");
            calcDisplay.textContent = num2;
            
        }
    })

    // DOM for "decimal" button 
    const decimalButton = document.querySelector('.decimal');
    decimalButton.addEventListener('click', () => {
        console.log('decimal pressed');
        let decimalButton = ".";
        const calcDisplay = document.querySelector('#display');

        if(operator == '') {
            const calcDisplay = document.querySelector('#display');
            console.log('decimal button registered here!', decimalButton);
            tempNum1Array.push(decimalButton);
            console.log('append the array1 with decimal: ', tempNum1Array);
            num1 = tempNum1Array.join('');
            document.getElementById("decimal").disabled = true; // To disable decimal button after it is been pressed
            console.log('num1 decimal button should be disabled now');

        }
    })