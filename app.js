/*
1- Write a JavaScript program to know if the input is positive  or negative , " 0 considered as positive "?
*/
let a=Number(prompt('Enter a number to check the sign'));
function checkSign(a){
    let num=a;
       if(num>=0){
       console.log(num +'  is a positive number');
       let a=Number(prompt(num +'  is a positive number'));
       }
       else{
        console.log(num +'  is a negative number');
        alert(num +'  is a negative number');
       }
}

checkSign(a);

/*
2- Write a JavaScript program takes 3 input from the user and print the max on the console?
*/
alert('Enter 3 inputs to find the max');
let b=Number(prompt('first number'));
let c=Number(prompt('second number'));
let d=Number(prompt('third number'));
function max(b,c,d){
    let num1=b;
    let num2=c;
    let num3=d;
    let max=num1;
    if(num2>max ){
max=num2;
    }
else if(num3>max){
max=num3;
}
console.log(max +'  is the maximum number');
alert(max +'  is the maximum number');
}

max(b,c,d);
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