/*
1- Write a JavaScript program to know if the input is positive  or negative , " 0 considered as positive "?
*/
// let input=Number(prompt("Please, Enter a number:"));
// if (input>=0){
//     console.log("The Number is Positive");
//     alert("The Number is Positive");
// }else if (input<0){
//     console.log("The Number is Negative");
//     alert("The Number is Negative");
// }



// /*
// 2- Write a JavaScript program takes 3 input from the user and print the max on the console?
// */
// alert("You need to enter three numbers");
// let numOne=Number(prompt("Please, enter you first number ?"));
// console.log(numOne);
// let numTwo=Number(prompt("Please, enter you second number ?"));
// console.log(numTwo);
// let numThree=Number(prompt("Please, enter you third number ?"));
// console.log(numThree);

// if (numOne>numTwo && numOne>numThree){
//     alert("The maximum between the three numbers is "+numOne);
//     console.log("The maximum between the three numbers is "+numOne);
// }else if(numTwo>numOne && numTwo>numThree){
//     alert("The maximum between the three numbers is "+numTwo);
//     console.log("The maximum between the three numbers is "+numTwo);
// } else if(numThree>numOne && numThree>numTwo){
//     alert("The maximum between the three numbers is "+numThree);
//     console.log("The maximum between the three numbers is "+numThree);
// }





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
"20 is even"`
*/

// for(let i = 0; i <= 20; i++){
//     if (i%2==0) {
//         console.log(i + " is even number")
//     }else{
//         console.log(i+ " is odd number")
//     }
// }


/*
4- Write a JavaScript program to calculate the sum of even numbers from 1-100 ?
*/
// let sum=0;
// for (let i=1;i<=100;i++){
//         if (i%2==0) {
//         sum=sum+i;
//     }
    
// }
// console.log("The Sum = "+sum);


/*
5- Write a JavaScript program to take 2 numbers from the user and print
ex:-
num1 = 3
num2 = 3
the sum is 6
the multiplication is 9
*/
let Num1=Number(prompt("The First Number is "));
alert("The First Number = "+Num1);
console.log("The First Number = "+Num1);
let Num2=Number(prompt("The Second Number is "));
alert("The Second Number = "+Num2);
console.log("The Second Number = "+Num2);
let sum=Num1+Num2;
alert("The SUM is "+sum );
console.log("The SUM is "+sum );
let multi=Num2*Num1;
alert("The Mulyiplication is "+multi );
console.log("The Mulyiplication is "+multi );

/*
6- Write a function that takes an integer minutes and converts it to seconds.
*/