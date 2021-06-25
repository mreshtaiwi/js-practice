/*
1- Write a JavaScript program to know if the input is positive  or negative , " 0 considered as positive "?
*/

function numerType(l){
    let anynumber=l;
    if (anynumber >= 0){
        console.log(anynumber,'is a positive.');
    } else {
        console.log(anynumber,'is nigative.');
    }
}
numerType(10);
/*
2- Write a JavaScript program takes 3 input from the user and print the max on the console?
*/
function numerType(l) {
    let anynumber = l;
    if (anynumber >= 0) {
        console.log(anynumber, 'is a positive.');
    } else {
        console.log(anynumber, 'is nigative.');
    }
}
numerType(10);

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

function numerType(l) {
    let anynumber = l;
    if (anynumber >= 0) {
        console.log(anynumber, 'is a positive.');
    } else {
        console.log(anynumber, 'is negative.');
    }
}
numerType(10);
/*
4- Write a JavaScript program to calculate the sum of even numbers from 1-100 ?
*/

function numerType(l) {
    let anynumber = l;
    if (anynumber >= 0) {
        console.log(anynumber, 'is a positive.');
    } else {
        console.log(anynumber, 'is negative.');
    }
}
numerType(10);
/*
5- Write a JavaScript program to take 2 numbers from the user and print
ex:-
num1 = 3
num2 = 3

the sum is 6
the multiplication is 9
*/
let num3=Number(prompt('enter a number'));
let num4=Number(prompt('enter another number'));
function multiSum(y,u){
    let sum3=y+u;
    let multi=y*u;
    let msg='the sum is.';
    let msg2='the multiplication is.';
    console.log(msg,sum3);
    console.log(msg2,multi);
}
multiSum(num3,num4);

/*
6- Write a function that takes an integer minutes and converts it to seconds.
*/