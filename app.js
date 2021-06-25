/*
1- Write a JavaScript program to know if the input is positive  or negative , " 0 considered as positive "?
*/
alert("Question one");
function posORneg(){
    let num  = Number(prompt("Enter any number to know if is positive  or negative "));
    if(num >= 0){
    return `The input ${num} is positive `;
    }else{
    return  `The input ${num} is negative`; 
}
}
alert(posORneg());
/*
2- Write a JavaScript program takes 3 input from the user and print the max on the console?
*/
alert("Question two ");
function max(){
    let num1 = Number(prompt("Enter first number "));
    let num2 = Number( prompt("Enter second number "));
    let num3 = Number(prompt("Enter third number "));
      let maxi = 0;
    if(num1 <= num2 ){
      maxi = num2;
    }else {
        maxi = num1;
    }
 
    if(maxi < num3){
        maxi = num3;
    }

    return `The max number is: ${maxi}` ;
}

console.log(max());

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