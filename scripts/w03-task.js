/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return number1 + number2;
}
 function addNumbers (add1 , add2){
    let addNumber1 = Number(document.querySelector(`#add1`).value);
    let addNumber2 = Number(document.querySelector(`#add2`).value);
    document.querySelector(`#sum`).value = add(addNumber1, addNumber2);
 }
document.querySelector(`#addNumbers`).addEventListener(`click`,addNumbers);


/* Function Expression - Subtract Numbers */
function subtract (number1,number2){
    return number1 - number2;
}

const subtractNumbers = function(){
    let subtract1 = Number(document.querySelector(`#subtract1`).value);
    let subtract2 = Number(document.querySelector(`#subtract2`).value);
    document.querySelector(`#difference`).value = subtract(subtract1, subtract2);
}
document.querySelector(`#subtractNumbers`).addEventListener(`click`,subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1,number2) => number1 * number2;

const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector(`#factor1`).value);
    let factor2 = Number(document.querySelector(`#factor2`).value);
    document.querySelector(`#product`).value = multiply(factor1,factor2);
}
document.querySelector(`#multiplyNumbers`).addEventListener(`click`,multiplyNumbers);


/* Open Function Use - Divide Numbers */
const divide = (number1,number2) => number1 / number2;

const divideNumbers = () => {
    let dividend = Number(document.querySelector(`#dividend`).value);
    let divisor = Number(document.querySelector(`#divisor`).value);
    document.querySelector(`#quotient`).value = divide(dividend,divisor);
}
document.querySelector(`#divideNumbers`).addEventListener(`click`,divideNumbers);


/* Decision Structure */
let currentdate = new Date();
let currentyear = currentdate.getFullYear();
document.querySelector(`#year`).innerHTML = currentyear;




/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let arrayNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector(`#array`).innerHTML = arrayNumbers;

/* Output Odds Only Array */
let oddNumbers = arrayNumbers.filter(number => number % 2===1);
document.querySelector(`#odds`).innerHTML = oddNumbers;


/* Output Evens Only Array */
let evenNumbers = arrayNumbers.filter(number => number % 2===0);
document.querySelector(`#evens`).innerHTML = evenNumbers;

/* Output Sum of Org. Array */
let sum = arrayNumbers.reduce((total,currentnumber) => total + currentnumber);
document.querySelector(`#sumOfArray`).innerHTML = sum;

/* Output Multiplied by 2 Array */
let arrayMulti = arrayNumbers.map(number => number * 2);
document.querySelector(`#multiplied`).innerHTML = arrayMulti;

/* Output Sum of Multiplied by 2 Array */
let sumOFMulti = arrayMulti.reduce((total,currentnumber)=>total+currentnumber);
document.querySelector(`#sumOfMultiplied`).innerHTML = sumOFMulti;
