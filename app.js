/*
1- Write a JavaScript program to know if the input is positive  or negative , " 0 considered as positive "?
*/






function numerType(l) {
    let anynumber = l;
    if (anynumber >= 0) {
        console.log(anynumber, 'is a positive.');
    } else {

        console.log(anynumber, 'is negative.');

        console.log(anynumber, 'is nigative.');

    }
}
numerType(10);


/*
2- Write a JavaScript program takes 3 input from the user and print the max on the console?
*/



/*
2- Write a JavaScript program takes 3 input from the user and print the max on the console?
*/

let num1 = Number(prompt(' enter 1st number'));
let num2 = Number(prompt('enter  2nd number'));
let num3 = Number(prompt('enter 3rd number'));
function maxNumber(a, b, c) {
    let message1 = ' is the max number.';
    if (num1 > num2 && num1 > num3) {
        console.log(num2, message1);
    } else if (num2 > num1 && num2 > num3) {
        console.log(num2, message1);
    } else {
        console.log(num3, message1);
    }
}
maxNumber(num1, num2, num3);

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

function numberType() {
    let messege2 = ' is even.';
    let messege3 = 'is odd';
    for (let i = 0; i <= 20; i++) {
        if (i % 2 == 0) {
            console.log(i, messege2);
        } else {
            console.log(i, messege3);
        }
    }
}
    numberType();



/*
4- Write a JavaScript program to calculate the sum of even numbers from 1-100 ?
*/


/*
5- Write a JavaScript program to take 2 numbers from the user and print
ex:-
num1 = 3
num2 = 3

the sum is 6
the multiplication is 9
*/


/*
6- Write a function that takes an integer minutes and converts it to seconds.
*/
