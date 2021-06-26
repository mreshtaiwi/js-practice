/*
1- Write a JavaScript program to know if the input is positive  or negative , " 0 considered as positive "?
*/
let q1 = Number(prompt('Enter a number'));
if(q1 >= 0){
    alert('Positive number')
    console.log('Positive number');
    console.log(q1);
}else {
    alert('Negative number')
    console.log('Negative number');
    console.log(q1);
}

/*
2- Write a JavaScript program takes 3 input from the user and print the max on the console?
*/

let num1=Number(prompt('Please enter first number'));
let num2=Number(prompt('Please enter second number'));
let num3=Number(prompt('Please enter third number'));
let numbers=[num1,num2,num3]
if(numbers[2] > numbers[0] && numbers[2] >numbers[1]){
    console.log(numbers[2] +  ' is the max');

} else if(numbers[1] > numbers[0] && numbers[1] >numbers[2]) {
    console.log(numbers[1] + ' is the max');

} else{

 console.log(numbers[0] + ' is the max');
}

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