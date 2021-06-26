/*
1- Write a JavaScript program to know if the input is positive  or negative , " 0 considered as positive "?
*/
let number1 =Number(prompt("please enter a number"));
if (number1<0) {console.log("the number is negative");
alert("the number is negative");}
else {console.log("the number is positive");
alert("the number is positive");}

/*
2- Write a JavaScript program takes 3 input from the user and print the max on the console?
*/
let n1 = Number(prompt("please enter the first number"));
let n2 =Number(prompt("please enter the second number"));
let n3 =Number(prompt("please enter the third number"));
if (n1>n2 && n1>n3) {console.log("the max is: "+n1);}
else if (n2>n1 && n2>n3) {console.log("the max is: "+n2);}
else if (n3>n2 && n3>n2) {console.log("the max is: "+n3);}
else {console.log("the numbers you entered are equal to each other");}




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
for (let i=0; i<=20; i++) {
    if (i%2===0) {console.log(i+" is even");}
    else {console.log(i+" is odd");}
}


/*
4- Write a JavaScript program to calculate the sum of even numbers from 1-100 ?
*/
let sum = 0
for (let i=0; i<=100; i++) {
    if (i%2===0) {
        sum=sum+i
    }
    }
    console.log(sum);


/*
5- Write a JavaScript program to take 2 numbers from the user and print
ex:-
num1 = 3
num2 = 3

the sum is 6
the multiplication is 9
*/
let num1 = Number(prompt("enter the first number"));
let num2 = Number(prompt("enter the second number"));
sum2=num1+num2
console.log("num1 = "+num1);
console.log("num2 = "+num2);
console.log("the sum is "+sum2);
console.log("the multiplication is "+num1*num2);





/*
6- Write a function that takes an integer minutes and converts it to seconds.
*/
function minutes () {
    let minute=parseInt(prompt("enter number of minutes"));
    let second=minute*60;
    console.log(second);
}
minutes();