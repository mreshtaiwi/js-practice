'use strict';

/*
1- Write a JavaScript program to know if the input is positive  or negative , " 0 considered as positive "?
*/

function positive_check(n){
  let number=n;
  if(number>=0){
    console.log(n, ' is a Positive number.');
  } else {
    console.log(n, ' is a Negative number.');
  }

}

positive_check(-5);


/*
2- Write a JavaScript program takes 3 input from the user and print the max on the console?
*/

function detect_max(a, b, c){
  let number1 = a;
  let number2 = b;
  let number3 = c;

  if(number1 > number2 && number1 > number3){
    console.log(number1, ' is the max number.');
  } else if(number2 > number1 && number2 > number3){
    console.log(number2, ' is the max number.');
  } else if (number3 > number1 && number3 > number2){
    console.log(number3, ' is the max number.');
  } else {console.log('Check your inputs.');
  }
}


detect_max(1,5,3);



/*
3- Write a JavaScript for loop that will iterate from 0 to 20. For each iteration,
it will check if the current number is odd or even, and display a message on the console?

Sample Output:
"0 is even"
"1 is odd"
"2 is even"
.
.
.
.
.
"19 is odd"
"20 is even"
*/

function parity_check(){

  for (let i=0; i<21; i++){
    if (i%2===0){
      console.log(i, ' is even');
    } else {
      console.log(i, ' is odd');
    }
  }
}


parity_check();


/*
4- Write a JavaScript program to calculate the sum of even numbers from 1-100 ?
*/

function even_sum(){
  let dummy= 0;
  let i= 0;
  while(i<=100){
    dummy= dummy + i;
    i= i+2;
  }
  console.log('The sum of even numbers from 1-100 is ', dummy);
}

even_sum();

/*
5- Write a JavaScript program to take 2 numbers from the user and print
ex:-
num1 = 3
num2 = 3

the sum is 6
the multiplication is 9
*/


function sum_multi(a, b){
  let number1= a;
  let number2= b;
  let sum= number1 + number2;
  let multi= number1 * number2;
  console.log('number1= ', number1);
  console.log('number2= ', number2);
  console.log('Their sum is ', sum);
  console.log('Their multiplication is ', multi);
}

sum_multi(5, 9);

/*
6- Write a function that takes an integer minutes and converts it to seconds.
*/

function minToSec(m){
  let minutes= m;
  let seconds= minutes*60;

  if(minutes !== parseInt(minutes) || typeof minutes === 'string'){
    console.log('Please check your input and try again.');
  } else {
    console.log(minutes, ' minutes in seconds is ', seconds);
  }
}

minToSec('8');
minToSec('B');
minToSec(8.5);
minToSec(8);
