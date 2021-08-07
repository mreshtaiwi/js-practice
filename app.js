// /*
// 1- Write a JavaScript program to know if the input is positive  or negative , " 0 considered as positive "?
// */
function isPositiveOrNegative(){
let number = Number(prompt("Enter a number"));

if (number > 0)
{
    console.log("Is positive");
}

else if (number < 0){
    console.log("Is negative");
}

else{
    console.log("It is Zero");
}
}
isPositiveOrNegative();

// /*
// 2- Write a JavaScript program takes 3 input from the user and print the max on the console?
// */

function isMax(){
let num1 = Number(prompt("Enter first number"));
let num2 = Number(prompt("Enter second number"));
let num3 = Number(prompt("Enter Third number"));

if (num1 >= num2 && num1 >= num3){
    console.log(`${num1} is the max`)
}
else if (num2 >= num1 && num2 >= num3){
    console.log(`${num2} is the max`)
}
else{
    console.log(`${num3} is the max`)
}
console.log(`The numbers are ${num1}, ${num2}, ${num3}`)

}
isMax();
// /*
// 3- Write a JavaScript for loop that will iterate from 0 to 20. For each iteration,
// it will check if the current number is odd or even, and display a message on the console?

// Sample Output:
// "0 is even"
// "1 is odd"
// "2 is even"
// .
// .
// .
// .
// .
// "19 is odd"
// "20 is even"
// */
function isOddisEven(){
    for (var i = 0; i <= 20; i++){

        if (i % 2 === 0 || i === 0){
            console.log(i + "  Is even")
        }
        
        else{
            console.log(i + "  Is Odd")
        }
    }
}
isOddisEven();

/*
4- Write a JavaScript program to calculate the sum of even numbers from 1-100 ?
*/


function sumEven(){
let sum = 0;
  for(let i = 1; i <=100; i++){
    if(i % 2 === 0) {
      sum += i;
    }
  }
  console.log ("The sum of even numbers is " + sum)
}
sumEven();





/*
5- Write a JavaScript program to take 2 numbers from the user and print
ex:-
num1 = 3
num2 = 3

the sum is 6
the multiplication is 9
*/

function sumAndMulti(){
  let num1 = Number(prompt("Enter first number"));
  let num2 = Number(prompt("Enter second number"));

  let sum = num1 + num2;
  let mult = num1 * num2;

  console.log(`num1 = ${num1} \nnum2 = ${num2} \nthe sum is ${sum} \nthe multiplication is ${mult}`  )
}
sumAndMulti();

/*
6- Write a function that takes an integer minutes and converts it to seconds.
*/

function convert(minutes) {
  minutes = Number(prompt("Enter minuts to convert it into seconds"))
  let seconds = minutes * 60;
	console.log("minute " + minutes + " = "+seconds+" seconds")
}
convert();