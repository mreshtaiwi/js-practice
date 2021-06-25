/*
1- Write a JavaScript program to know if the input is positive  or negative , " 0 considered as positive "?
*/
let isPositive = function (number) {
    return number >= 0 ? true : false;
}

let number = 5;
console.log(isPositive(number));

number = -5;
console.log(isPositive(number));

number = 0;
console.log(isPositive(number));

/*
2- Write a JavaScript program takes 3 input from the user and print the max on the console?
*/

function maxOfThree(a, b, c) {
    if (a >= b) {
        return a;
    } else if (b >= c) {
        return b;
    } else {
        return c;
    }
}

console.log(maxOfThree(158, 587, 25897));
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




for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even`);
    }
    else {
        console.log(`${i} is odd`);
    }
}


/*
4- Write a JavaScript program to calculate the sum of even numbers from 1-100 ?
*/
let sumEvens=0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        sumEvens+=i;
    }
 
}

console.log(sumEvens);
/*
5- Write a JavaScript program to take 2 numbers from the user and print
ex:-
num1 = 3
num2 = 3

the sum is 6
the multiplication is 9
*/
function  sumAndMultiply(){
let a = Number(prompt("Enter First Number"));
let b = Number(prompt("Enter second Number"));

alert(`num1 = ${a}
num2 = ${b}
the sum is ${a+b}
the multiplication is ${a*b}
`);


}

sumAndMultiply();
/*
6- Write a function that takes an integer minutes and converts it to seconds.
*/

function convertMinutesToSecodes(minutes){
 return minutes * 60;
}

console.log(convertMinutesToSecodes(60));
