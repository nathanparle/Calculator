var runningTotal = 0;
var inputOne =0;
var inputTwo =0;
var sign = "" ;
const add = function(inputOne, inputTwo){
    runningTotal = inputOne + inputTwo;
    }
const minus = function ( inputOne, inputTwo){
    runningTotal =  inputOne - inputTwo;
    }
const multiply = function (inputOne, inputTwo){
    runningTotal =  inputOne * inputTwo;
    }
const divide = function( inputOne, inputTwo){
    if ( inputTwo == 0 ){ runningTotal = "8008! - press clear!";}else{ 
    runningTotal = inputOne / inputTwo;
    }}
const operate = function (inputOne, inputTwo, sign){
    if (sign == "+"){ add(inputOne, inputTwo)}
    else if(sign == "/"){ divide(inputOne, inputTwo)}
    else if(sign == "-"){ minus(inputOne, inputTwo)}
    else { multiply(inputOne, inputTwo)}  
    
};  

const checkdigits1 = function () {if (inputOne>0){
    inputOne = inputOne * 10;
    return inputOne;
}}
const checkdigits2 = function () {if (inputTwo>0){
    inputTwo = inputTwo * 10;
   return inputTwo;
}}
const calculator = function (){
const container = document.querySelector(".container");
const display = document.createElement("div");
display.classList.add("display");
display.textContent = runningTotal;
container.appendChild(display);
const button1 = document.createElement("button");
button1.classList.add("button");
button1.addEventListener('click', ()=> {if(sign == ""){checkdigits1();
    inputOne =+ 1; display.textContent=inputOne;}else{
    checkdigits2();
    inputTwo += 1; display.textContent=inputTwo;}});
button1.textContent = "1";
container.appendChild(button1);
const button2 = document.createElement("button");
button2.classList.add("button");
button2.addEventListener('click', ()=> {if(sign == ""){checkdigits1();
    inputOne += 2; display.textContent=inputOne;}else{
    checkdigits2();
    inputTwo += 2; display.textContent=inputTwo;}});
button2.textContent = "2";
container.appendChild(button2);
const button3 = document.createElement("button");
button3.classList.add("button");
button3.addEventListener('click', ()=> {if(sign == ""){checkdigits1();
    inputOne += 3; display.textContent=inputOne;}else {
    checkdigits2();
    inputTwo += 3; display.textContent=inputTwo;}});
button3.textContent = "3";
container.appendChild(button3);
const buttonPlus = document.createElement("button");
buttonPlus.classList.add("buttonSign");
buttonPlus.addEventListener('click', ()=> {if ( sign != "" && inputTwo > 0){ 
    operate(inputOne, inputTwo, sign, runningTotal);
    display.textContent = runningTotal;
    inputOne = runningTotal;
    inputTwo = 0;
    }else { sign = "+"; display.textContent=sign}});
buttonPlus.textContent = "+";
container.appendChild(buttonPlus);
const button4 = document.createElement("button");
button4.classList.add("button");
button4.addEventListener('click', ()=> {if(sign == ""){checkdigits1();
    inputOne += 4; display.textContent=inputOne;}else {
    checkdigits2();
    inputTwo += 4; display.textContent=inputTwo;}});
button4.textContent = "4";
container.appendChild(button4);
const button5 = document.createElement("button");
button5.classList.add("button");
button5.addEventListener('click', ()=> {if(sign == ""){checkdigits1();
    inputOne += 5; display.textContent=inputOne;}else {
    checkdigits2();
    inputTwo += 5; display.textContent=inputTwo;}});
button5.textContent = "5";
container.appendChild(button5);
const button6 = document.createElement("button");
button6.classList.add("button");
button6.addEventListener('click', ()=> {if(sign == ""){checkdigits1();
    inputOne += 6; display.textContent=inputOne;}else {
    checkdigits2();
    inputTwo += 6; display.textContent=inputTwo;}});
button6.textContent = "6";
container.appendChild(button6);
const buttonMinus = document.createElement("button");
buttonMinus.classList.add("buttonSign");
buttonMinus.addEventListener('click', ()=> {if ( sign != "" && inputTwo > 0){ 
    operate(inputOne, inputTwo, sign);
    display.textContent = runningTotal;
    inputOne = runningTotal;
    inputTwo = 0;
    }else { sign = "-"; display.textContent=sign}});
buttonMinus.textContent = "-";
container.appendChild(buttonMinus);
const button7 = document.createElement("button");
button7.classList.add("button");
button7.addEventListener('click', ()=> {if(sign == ""){checkdigits1();
    inputOne += 7; display.textContent=inputOne;}else{
    checkdigits2();
    inputTwo += 7; display.textContent=inputTwo;}});
button7.textContent = "7";
container.appendChild(button7);
const button8 = document.createElement("button");
button8.classList.add("button");
button8.addEventListener('click', ()=> {if(sign == ""){checkdigits1();
    inputOne += 8; display.textContent=inputOne;}else {
    checkdigits2();
    inputTwo += 8; display.textContent=inputTwo;}});
button8.textContent = "8";
container.appendChild(button8);
const button9 = document.createElement("button");
button9.classList.add("button");
button9.addEventListener('click', ()=> {if(sign == ""){checkdigits1();
    inputOne += 9; display.textContent=inputOne;}else {
    checkdigits2();
    inputTwo += 9; display.textContent=inputTwo;}});
button9.textContent = "9";
container.appendChild(button9);
const buttonTimes = document.createElement("button");
buttonTimes.classList.add("buttonSign");
buttonTimes.addEventListener('click', ()=> {if ( sign != "" && inputTwo > 0){ 
    operate(inputOne, inputTwo, sign);
    display.textContent = runningTotal;
    inputOne = runningTotal;
    inputTwo = 0;
    }else { sign = "*"; display.textContent=sign}});
buttonTimes.textContent = "*";
container.appendChild(buttonTimes);
const buttonClear = document.createElement("button");
buttonClear.classList.add("button");
buttonClear.addEventListener('click', ()=> {inputOne = 0; display.textContent=inputOne ;
    sign = "";
    inputTwo = 0; 
});
buttonClear.textContent = "Clear";
container.appendChild(buttonClear);
const button0 = document.createElement("button");
button0.classList.add("button");
button0.addEventListener('click', ()=> {if(sign == ""){checkdigits1();
    inputOne += 0; display.textContent=inputOne;}else {
    checkdigits2();
    inputTwo += 0; display.textContent=inputTwo;}});
button0.textContent = "0";
container.appendChild(button0);
const buttonEquals = document.createElement("button");
buttonEquals.classList.add("buttonSign");
buttonEquals.addEventListener('click', ()=> { if ( sign != "" ){ operate(inputOne, inputTwo, sign);
    display.textContent = runningTotal;
    inputOne = runningTotal;
    
}else{ display.textContent = inputOne; }});
buttonEquals.textContent = "=";
container.appendChild(buttonEquals);
const buttonDivide = document.createElement("button");
buttonDivide.classList.add("buttonSign");
buttonDivide.addEventListener('click', ()=> {if ( sign != "" && inputTwo > 0){ 
    operate(inputOne, inputTwo, sign);
    display.textContent = runningTotal;
    inputOne = runningTotal;
    inputTwo = 0;
    }else {sign = "/"; display.textContent = sign;}});
buttonDivide.textContent = "/";
container.appendChild(buttonDivide);
}
calculator();




